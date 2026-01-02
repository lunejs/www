import { CustomFieldsCard } from './custom-fields-card/custom-fields-card';
import { FulfillmentCard } from './fulfillment-card/fulfillment-card';
import { VariantsCard } from './variants-card/variants-card';
import { ZonesCard } from './zones-card/zones-card';

export const Featured = () => {
  return (
    <section className="max-w-5xl m-auto flex flex-col gap-10">
      <header>
        <span className="text-sm uppercase text-distinct leading-5 tracking-[0.12em]">
          Simple by design
        </span>
        <h2 className="font-medium text-3xl sm:text-[40px]">Powerful by default.</h2>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-8 gap-8">
        <FulfillmentCard />
        <VariantsCard />
        <CustomFieldsCard />
        <ZonesCard />
      </div>
    </section>
  );
};
