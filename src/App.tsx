import { useState } from 'react';

const dict = {
  uz: {
    club: "Xalqaro Politsiya Assotsiatsiyasi klubi",
    dob: "Tug'ulgan sana:",
    joined: "A'zolikka kirgan sana:",
    blood: "Qon guruhi:",
    organ: "Qaysi davlat organida xizmat qilgan:",
    status_label: "Xizmat guvohnomasi holati:",
    status_active: "Faol",
    until: "gacha",
    help: "Qonun doirasida yordam ko'rsatishingizni so'raymiz",
    btn_id: "ID KARTA",
    btn_license: "HAYDOVCHILIK GUVOHNOMASI",
    btn_cert: "MA'LUMOTNOMA",
    id_val: "Uz 303t"
  },
  ru: {
    club: "Клуб Международной Полицейской Ассоциации",
    dob: "Дата рождения:",
    joined: "Дата вступления:",
    blood: "Группа крови:",
    organ: "В каком государственном органе служил:",
    status_label: "Статус служебного удостоверения:",
    status_active: "Активен",
    until: "до",
    help: "Просим оказать содействие в рамках закона",
    btn_id: "ID КАРТА",
    btn_license: "ВОДИТЕЛЬСКОЕ УДОСТОВЕРЕНИЕ",
    btn_cert: "СПРАВКА",
    id_val: "Uz 303t"
  },
  en: {
    club: "International Police Association Club",
    dob: "Date of birth:",
    joined: "Date of joining:",
    blood: "Blood group:",
    organ: "Served in which state body:",
    status_label: "Service ID status:",
    status_active: "Active",
    until: "until",
    help: "We ask you to assist within the framework of the law",
    btn_id: "ID CARD",
    btn_license: "DRIVING LICENSE",
    btn_cert: "CERTIFICATE",
    id_val: "Uz 303t"
  }
};

export default function App() {
  const [modalType, setModalType] = useState<string | null>(null);
  const [lang, setLang] = useState('uz');
  const t = dict[lang as keyof typeof dict];

  return (
    <>
      <div id="root">
        {/* Background Map Fix */}
        <div className="fixed inset-0 z-[-1] bg-[#2A4B8A] overflow-hidden">
          <img src="/images/m.a4159446.svg" alt="bg_map" className="w-[125%] sm:w-[90%] h-full object-cover sm:object-contain opacity-30 absolute top-0 left-[-15%] sm:left-0 object-left" />
        </div>

        <div className="flex items-center z-[99] justify-start flex-col w-full min-h-[100vh] px-4 sm:py-5 py-[20px] mx-auto">
          
          <div className="flex items-start max-w-[425px] mx-auto justify-center w-full gap-[30px]">
            <div className="w-[170px] aspect-[3/4] overflow-hidden rounded-[8px] border border-white/20 shadow-md">
              <img src="/images/verified_doctors/client_1/IMG_2929 copy.jpg" alt="Mutaxassis" className="w-full h-full object-cover object-top" />
            </div>
            <div className="flex items-center justify-center flex-col w-[170px] font-sans">
              <img src="/images/49ad1a58e698be070b5584c5680aaece.png" alt="c_img" className="w-[80%]" />
              <p className="text-center text-[white] leading-tight mt-2">{t.club}</p>
            </div>
          </div>

          <div className="flex max-w-[425px] mx-auto items-start justify-start w-full flex-col text-left mt-6">
            <p className="text-[32px] text-[white] w-full uppercase font-medium text-left leading-tight">ASADULLAEV</p>
            <p className="text-[32px] text-[white] w-full uppercase font-medium text-left leading-tight">ASADBEK</p>
            <p className="text-[32px] text-[white] w-full uppercase font-medium text-left leading-tight">DAVRONOVICH</p>
          </div>

          <p className="w-full max-w-[425px] mx-auto text-[24px] text-white my-4">
            {t.btn_id.split(' ')[0]} CARD: <span className="text-[#00ff4c]">{t.id_val}</span>
          </p>

          <div className="w-full max-w-[425px] mx-auto text-[24px] text-white flex items-center justify-start gap-3 mb-[20px]">
            IPA Uzbekistan <img src="/images/6c20d9da2c2209c28e5ec362234a59cf.png" alt="a_img" className="w-[60px]" />
          </div>

          <div className="flex max-w-[425px] mx-auto items-start justify-start w-full flex-col mb-[20px]">
            <p className="text-[white] text-[20px]">{t.dob}</p>
            <p className="text-[white] text-[20px] font-bold">27.08.2003</p>
          </div>

          <div className="flex max-w-[425px] mx-auto items-start justify-start w-full flex-col mb-[20px]">
            <p className="text-[white] text-[20px]">{t.joined}</p>
            <p className="text-[white] text-[20px] font-bold">01/01/2024</p>
          </div>

          <div className="flex max-w-[425px] mx-auto items-start justify-start w-full flex-col mb-[20px]">
            <p className="text-[white] text-[20px]">{t.blood}</p>
            <p className="text-[white] text-[20px] font-bold">III Guruh (+)</p>
          </div>

          <div className="flex max-w-[425px] mx-auto items-start gap-2 justify-start w-full relative mb-[20px]">
            <div className="flex items-center justify-start w-[350px]">
              <p className="text-[white] text-[20px] leading-tight max-w-[200px]">{t.organ}</p>
              <div className="flex items-center justify-center w-[80px] h-[80px] overflow-hidden ml-4">
                <img src="/images/0c634b69810c47ee122044e9d15bf327.png" alt="organ" className="w-[80px]" />
              </div>
            </div>
          </div>

          <div className="flex max-w-[425px] mx-auto items-start mb-[20px] justify-start w-full flex-col">
            <p className="text-[white] text-[20px]">{t.status_label}</p>
            <b className="text-[#00FF4C] text-[16px]">{t.status_active}</b>
            <p className="text-[white] text-[20px] font-bold"> 30/12/2026 {t.until}</p>
          </div>

          <div className="flex max-w-[425px] mx-auto mb-[20px] items-start gap-2 justify-start w-full flex-col">
            <p className="text-[#00FF4C] text-[20px] leading-tight">{t.help}</p>
          </div>

          <div className="flex max-w-[425px] mx-auto mb-[20px] items-start gap-3 justify-start w-full flex-col">
            <button onClick={() => setModalType('id')} className="align-middle select-none font-sans font-bold text-black text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none px-6 bg-white shadow-md hover:shadow-lg focus:shadow-none active:shadow-none block w-full text-[16px] py-[10px] rounded" type="button">
              {t.btn_id}
            </button>
            <button onClick={() => setModalType('license')} className="align-middle select-none font-sans font-bold text-black text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none px-6 bg-white shadow-md hover:shadow-lg focus:shadow-none active:shadow-none block w-full text-[16px] py-[10px] rounded" type="button">
              {t.btn_license}
            </button>
            <button onClick={() => setModalType('cert')} className="align-middle select-none font-sans font-bold text-black text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none px-6 bg-white shadow-md hover:shadow-lg focus:shadow-none active:shadow-none block w-full text-[16px] py-[10px] rounded" type="button">
              {t.btn_cert}
            </button>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center justify-center gap-[20px] mt-4">
            <p onClick={() => setLang('uz')} className={`cursor-pointer transition-all ${lang === 'uz' ? 'text-white font-bold scale-110' : 'text-white/60'}`}>UZ</p>
            <p onClick={() => setLang('ru')} className={`cursor-pointer transition-all ${lang === 'ru' ? 'text-white font-bold scale-110' : 'text-white/60'}`}>RU</p>
            <p onClick={() => setLang('en')} className={`cursor-pointer transition-all ${lang === 'en' ? 'text-white font-bold scale-110' : 'text-white/60'}`}>EN</p>
          </div>
          
        </div>

        {/* Modal Block */}
        <div onClick={() => setModalType(null)} className={`items-center justify-center w-full h-[100vh] bg-[#141239e0] z-[999] backdrop-blur-md ${modalType ? 'flex' : 'hidden'} fixed top-0 left-0 p-6`}>
          <div onClick={(e) => e.stopPropagation()} className="relative flex flex-col items-center justify-center w-full max-w-[425px]">
            {modalType === 'cert' && (
              <p className="text-white text-center text-[13px] md:text-[15px] font-sans leading-loose max-w-[425px]">
                INTERNATIONAL POLICE ASSOCIATION (IPA) - BMTning Iqtisodiy va ijtimoiy Kengashi, Yevropa Kengashi va Amerika davlatlari tashkilotida «Special» maqomiga ega boʻlgan, YUNESKO va EUROPOL bilan ishchi munosabatlarni qoʻllab-quvvatlovchi xalqaro nodavlat tashkiloti.<br/><br/>
                «INTERNATIONAL POLICE ASSOCIATION CLUB» IPAning O’zbekiston Respublikasi hududidagi bo’limi maqomida faoliyat yuritadi.<br/>
                07.10.2019 yilda O‘zbekiston Respublikasi Adliya vazirligi huzuridagi Davlat xizmatlari agentligidan 767995-son bilan davlat ro‘yxatidan o‘tkazilgan.<br/><br/>
                Markaziy ofis: O’zbekiston Respublikasi, Toshkent shahri, Yakkasaroy tumani, Yunus Rajabiy ko’chasi 2 uy Tel: +998 90 940 94 07 (office).<br/>
                kadrlar xizmati E-mail: ipa.uz@mail.ru www.ipa-club.uz
              </p>
            )}
            {modalType === 'id' && (
              <div className="w-[95%] sm:w-[90%] aspect-[1.58/1] rounded-lg overflow-hidden shadow-2xl border-2 border-white/20 mx-auto bg-white flex items-center justify-center">
                <img src="/images/verified_doctors/client_1/id_card_new.png" alt="ID Card" className="w-full h-full object-contain object-center scale-[1.02]" />
              </div>
            )}
            {modalType === 'license' && (
              <div className="w-[95%] sm:w-[90%] aspect-[1.58/1] rounded-lg overflow-hidden shadow-2xl border-2 border-white/20 mx-auto bg-white flex items-center justify-center">
                <img src="/images/verified_doctors/client_1/license_new.jpg" alt="License" className="w-full h-full object-contain object-center scale-[1.02]" />
              </div>
            )}
            {modalType && <p onClick={() => setModalType(null)} className="text-white/60 text-[14px] mt-6 cursor-pointer hover:text-white transition-all uppercase tracking-widest border-b border-transparent hover:border-white">Yopish / Close</p>}
          </div>
        </div>
      </div>
    </>
  );
}
