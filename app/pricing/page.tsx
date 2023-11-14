import PageTrunk from '@/components/ui/PageTrunk';
import Card from '@/components/ui/card';
import { tiers } from '@/pricingPlanTier';
import React from 'react';

const Pricing = () => {

  return (
    <PageTrunk title='Pricing Plan'>
        {tiers.map((tier)=>{
          return(
          <Card plan={tier.name} description={tier.description} price={tier.priceMonthly} features={tier.features} />)
          })}
    </PageTrunk>
  )
};

export default Pricing;
