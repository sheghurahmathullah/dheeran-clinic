import { HeartPulse, Footprints, Microscope, Clock } from 'lucide-react';

const Approach = () => {
  return (
    <section id="approach" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-[#5e8f1e] font-semibold text-sm uppercase tracking-wide mb-4">OUR APPROACH</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            General <span className="text-[#22578c]">Diabetics & Diabetic Foot Care</span> Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Dheeran General Diabetics and Diabetic Foot Clinic, our specialized team provides expert guidance, advanced diagnostics, and compassionate support for those managing diabetes and diabetic foot health.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-6xl mx-auto">
          <div className="text-center group">
            <div className="bg-red-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition-colors">
              <HeartPulse className="h-10 w-10 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Personalized Diabetes Care</h3>
            <p className="text-gray-600 leading-relaxed">Treatment plans tailored for each individual to achieve optimal blood sugar control and overall health.</p>
          </div>

          <div className="text-center group">
            <div className="bg-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
              <Footprints className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Foot Care</h3>
            <p className="text-gray-600 leading-relaxed">Comprehensive assessment and management of diabetic foot health to prevent complications and promote healing.</p>
          </div>

          <div className="text-center group">
            <div className="bg-purple-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
              <Microscope className="h-10 w-10 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Diagnostic Excellence</h3>
            <p className="text-gray-600 leading-relaxed">Utilizing state-of-the-art diagnostic tools to detect early signs of neuropathy and vascular disease.</p>
          </div>

          <div className="text-center group">
            <div className="bg-teal-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-200 transition-colors">
              <Clock className="h-10 w-10 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Long-Term Support</h3>
            <p className="text-gray-600 leading-relaxed">Regular follow-ups, education, and monitoring to help maintain foot health and prevent recurrence of problems.</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Dheeran General Diabetics and Diabetic Foot Clinic?</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed"><strong>Specialized Foot Assessments:</strong> In-depth exams and risk evaluation for early detection of ulcers or complications.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed"><strong>Evidence-Based Interventions:</strong> Management strategies backed by the latest diabetes and podiatry research.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed"><strong>Integrated Team Care:</strong> Collaboration between diabetologists, podiatrists, and nurses for holistic health.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-700 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed"><strong>Continuous Education:</strong> Patient empowerment through regular workshops on foot self-care and diabetes management.</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/why-choose.jpg"
                alt="Diabetic foot care consultation"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
