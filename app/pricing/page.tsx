import PageTrunk from '@/components/ui/PageTrunk';
import Card from '@/components/ui/card';
import React from 'react';

const Pricing = () => {

  return (
    <PageTrunk title='Pricing Plan'>
        {/* Pricing Card 1 */}
        <Card plan="Basic Plan" description="Perfect for Personal" price={90} />
        {/* Pricing Card 2 */}
        <Card plan="Standard Plan" description="Perfect for small businesses" price={150} />
        {/* Pricing Card 3 */}
        <Card plan="Plus plan" description="Perfect for enterprise" price={900} />
    </PageTrunk>
  )
};

export default Pricing;
