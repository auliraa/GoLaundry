import React from 'react';
import { Heart, BookOpen, Sparkles } from 'lucide-react';

const quotes = [
  {
    text: "النَّظَافَةُ مِنَ الْإِيمَانِ",
    translation: "Kebersihan adalah bagian dari iman",
    source: "HR. Muslim",
    icon: Heart
  },
  {
    text: "إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ وَيُحِبُّ الْمُتَطَهِّرِينَ",
    translation: "Sesungguhnya Allah menyukai orang-orang yang bertaubat dan menyukai orang-orang yang menyucikan diri",
    source: "QS. Al-Baqarah: 222",
    icon: BookOpen
  },
  {
    text: "طَهِّرُوا أَجْسَادَكُمْ يُطَهِّرِ اللَّهُ قُلُوبَكُمْ",
    translation: "Sucikanlah badan kalian, maka Allah akan menyucikan hati kalian",
    source: "Hadits",
    icon: Sparkles
  }
];

const IslamicQuotes: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Inspirasi Kebersihan dalam Islam
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kebersihan bukan hanya soal penampilan, tetapi juga bagian dari ibadah dan keimanan kita
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quotes.map((quote, index) => {
            const IconComponent = quote.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#328E6E]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-[#328E6E]" />
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-lg text-[#328E6E] font-arabic mb-3 leading-relaxed" dir="rtl">
                      {quote.text}
                    </p>
                    <p className="text-gray-800 font-medium italic">
                      "{quote.translation}"
                    </p>
                  </div>
                  
                  <div className="text-sm text-gray-500 font-medium">
                    {quote.source}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IslamicQuotes;