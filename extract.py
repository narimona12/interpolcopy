import asyncio
from playwright.async_api import async_playwright
import json

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 375, "height": 812})
        await page.goto('https://ipa-id.uz/Uz233tXK')
        
        # Wait for the main content to load
        await page.wait_for_timeout(3000)

        # Get the computed styles logic via JS
        data = await page.evaluate('''() => {
            const getCompStyles = (el) => {
                if(!el) return null;
                const computed = window.getComputedStyle(el);
                return {
                    tagName: el.tagName,
                    id: el.id,
                    className: el.className,
                    bg: computed.backgroundColor,
                    color: computed.color,
                    padding: computed.padding,
                    margin: computed.margin,
                    fontFamily: computed.fontFamily,
                    fontSize: computed.fontSize,
                    width: computed.width,
                    height: computed.height,
                    border: computed.border,
                    borderRadius: computed.borderRadius
                };
            };
            
            // Collect all image sources
            const imgs = Array.from(document.querySelectorAll('img')).map(img => img.src);
            
            // Walk the DOM tree
            const walk = (node) => {
                if (node.nodeType === Node.TEXT_NODE) {
                    const text = node.textContent.trim();
                    return text ? { type: 'text', text } : null;
                }
                if (node.nodeType !== Node.ELEMENT_NODE) return null;
                // omit scripts/styles
                if (node.tagName === 'SCRIPT' || node.tagName === 'STYLE') return null;
                
                const styles = getCompStyles(node);
                const children = Array.from(node.childNodes).map(walk).filter(Boolean);
                let textContentForAnalysis = Array.from(node.childNodes).filter(n => n.nodeType === Node.TEXT_NODE).map(n => n.textContent.trim()).join(' ');
                
                return {
                    type: 'element',
                    tag: node.tagName,
                    styles: styles,
                    children: children
                };
            };
            
            const root = walk(document.body);
            return { html_tree: root, images: imgs, html_source: document.body.innerHTML };
        }''')
        
        with open('extracted_data.json', 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)

        print("Extraction complete.")
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
