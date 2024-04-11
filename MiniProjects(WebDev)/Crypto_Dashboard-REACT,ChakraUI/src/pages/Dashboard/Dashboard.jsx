import DashboardLayout from "../../components/DashboardLayout";
import PortfolioSection from "./components/PortfolioSection";
import PriceSection from "./components/PriceSection";
import { Grid, GridItem } from "@chakra-ui/react";
import Transactions from "./components/Transactions";
import InfoCards from "./components/InfoCards";
import contact from "/contact.svg";
import loans from "/loans.svg";

const Dashboad = ({}) => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          xl: "repeat(2,1fr)",
        }}
        gap="6"
      >
        <GridItem
          colSpan={{
            base: 1,
            xl: 2,
          }}
        >
          <PortfolioSection />
        </GridItem>
        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
        <GridItem colSpan={1}>
          <Transactions />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCards
            inverted={false}
            imgUrl={loans}
            text="Learn more about Loans – Keep your Bitcoin, access it’s value without
        selling it"
            tagText="Loans"
          />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCards
            inverted={true}
            imgUrl={contact}
            text="Learn more about our real estate, mortgage, and  corporate account services"
            tagText="Contact"
          />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboad;
