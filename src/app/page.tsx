import { CustomFieldsCard } from '@/components/custom-fields-card/custom-fields-card';
import { FulfillmentCard } from '@/components/fulfillment-card/fulfillment-card';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { VariantsCard } from '@/components/variants-card/variants-card';
import { ZonesCard } from '@/components/zones-card/zones-card';

export default function Home() {
  return (
    <div>
      <Header />

      <Hero />

      <section className="max-w-5xl m-auto flex flex-col gap-10">
        <header>
          <span className="uppercase text-distinct leading-5 tracking-[0.12em]">
            Simple by design
          </span>
          <h2 className="font-medium text-[40px]">Powerful by default.</h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-8 gap-8">
          <FulfillmentCard />
          <VariantsCard />
          <CustomFieldsCard />
          <ZonesCard />
        </div>
      </section>
    </div>
  );
}
