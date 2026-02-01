import cat from "./cat.png";

export function Index() {
  return (
    <div className="animate-fadeIn">
      <section className="flex flex-col md:flex-row items-center gap-8 py-10 border-b border-dashed border-[#999]">
        <div className="w-32 shrink-0 bg-gray-50 border border-[#999] flex items-center justify-center overflow-hidden">
          <img
            src={cat}
            className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>

        <div className="text-left space-y-4">
          <h2 className="text-xl font-normal text-[#333]">keishi kuwabara / Melchior and Taban</h2>
          <p className="leading-relaxed">
            宮城県在住<br />
            Web制作と静かな時間が好きな開発者です<br />
            プロフェッショナルとしてより良いものを創るという信念を持っています<br />
            愛猫のラグドール
          </p>
        </div>
      </section>

      <section className="py-10 text-left">
        <h3 className="text-base font-normal mb-6 border-l-15 border-[#333] pl-3 text-[#333]">
          Skills & Environment
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
          <dl className="flex border-b border-gray-100 pb-2">
            <dt className="w-24 font-bold">Languages</dt>
            <dd>Ruby, PHP, Swift, C#, Go, Javascript, HTML5, CSS3</dd>
          </dl>
          <dl className="flex border-b border-gray-100 pb-2">
            <dt className="w-24 font-bold">Frameworks</dt>
            <dd>Ruby on Rails, Laravel</dd>
          </dl>
          <dl className="flex border-b border-gray-100 pb-2">
            <dt className="w-24 font-bold">Environment</dt>
            <dd>Mac, Docker, VS Code</dd>
          </dl>
          <dl className="flex border-b border-gray-100 pb-2">
            <dt className="w-24 font-bold">IaaS</dt>
            <dd>AWS</dd>
          </dl>
        </div>
      </section>
    </div>
  );
}
