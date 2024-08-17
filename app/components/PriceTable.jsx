import { currentUser } from "@clerk/nextjs";
import BadgeMessage from "./BadgeMessage";
import BadgeGroup from "./BadgeGroup";
import PricingTableToggler from "./PricingTableToggler";

const PriceTable2 = async () => {
  const user = await currentUser();

  return (
    <section className="bg-[#ffffff14] py-24 lg:py-32">
      <BadgeGroup alignment="center">
        <BadgeMessage> Pricing Table 💰</BadgeMessage>
      </BadgeGroup>
      {/* <PricingTableToggler userStatus={user} /> */}
      <PricingTableToggler userStatus={user ? true : false} />
    </section>
  );
};

export default PriceTable2;
