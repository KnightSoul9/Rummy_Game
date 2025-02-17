export default function Contact() {
  return (
    <div className="min-h-screen bg-customBeige relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-96 -right-16 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-16 left-48 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-4xl relative z-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 text-gray-800 drop-shadow-lg">
          Contact Us
        </h1>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-8 mb-6 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-800 border-b pb-4">
            Customer Support Notice
          </h2>
          <div className="space-y-6">
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              RummyBestApp पर List Apps/Games की Customer Support हमारे द्वारा नहीं दिया जाता हैं। यदि आपको कोई समस्या आती हैं। तो उस गेम्स के अंदर मौजूद Support ऑप्शन पर संपर्क करें। क्योंकि यहाँ पर List Games/Apps हमारे नहीं हैं। हम उन गेम्स के मालिक नहीं हैं।
            </p>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-8 mb-6 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-800 border-b pb-4">
            Business Deals
          </h2>
          <div className="space-y-6">
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              यदि आप एक गेम निर्माता Company या Operator या Administrator हैं। और आप हमारी वेबसाइट के माध्यम से अपने एप्लिकेशन का Promotion करना चाहते हैं, तो आप नीचे दिए गए Contact Details के माध्यम से हमसे संपर्क कर सकते हैं और Promotion और Cooperation के बारे में बात कर सकते हैं।
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              If you are a Game Maker Company or Operator or Administrator. Or If you want to Promote The Application, then you can contact us through the contact details given below. Can and talk about promotion and cooperation.
            </p>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-800 border-b pb-4">
            Contact Details
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-4 rounded-xl hover:bg-gray-50/80 transition-colors duration-300">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <a href="mailto:fordronzar@gmail.com" className="text-base sm:text-lg text-blue-600 hover:text-blue-800 hover:underline">
                fordronzar@gmail.com
              </a>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-4 rounded-xl hover:bg-gray-50/80 transition-colors duration-300">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1.195 17.014c-.42.842-1.97.842-2.39 0l-2.413-4.827c-.42-.842.105-1.89 1.195-1.89h4.826c1.09 0 1.615 1.048 1.195 1.89l-2.413 4.827z"/>
              </svg>
              <a href="https://telegram.me/iambestug" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg text-blue-600 hover:text-blue-800 hover:underline">
                Message on Telegram: @iambestug
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
