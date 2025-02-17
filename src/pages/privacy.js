export default function Privacy() {
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
          Privacy Policy
        </h1>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-8 mb-6 sm:mb-10">
          <div className="space-y-6">
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              RummyBestApp आपकी किसी भी जानकारी को एकत्रित नहीं करता हैं। यहाँ पर List किया गया Apps हमारे नहीं हैं। यदि आप उसका उपयोग करते हैं। तो वे आपका महत्वपूर्ण जानकारी जैसे Mobile Number, Email इत्यादि एकत्र कर सकते हैं। और वे किसी को बेच भी सकते हैं। तो इसके लिए RummyBestApp जिम्मेदार नहीं होगा।
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              यदि आपकी आयु 18 वर्ष से कम है तो आपको इस Website का उपयोग नहीं करना चाहिए।
            </p>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-800 border-b pb-4">
            Important Disclaimer
          </h2>
          <div className="space-y-6">
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              हम किसी भी व्यक्ति को Real Cash Earning Apps के अंदर Add Money या Add Cash करने का सलाह नहीं देते हैं। Apps के Download Page पर जो आपको Banner दिखता हैं। वह एक विज्ञापन मात्र है। उसमें किए गए दावे आप 100% लागू नहीं हो सकता हैं।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
