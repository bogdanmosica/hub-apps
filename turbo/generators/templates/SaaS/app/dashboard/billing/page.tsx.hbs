import { BillingForm } from '@hub/shadcn-ui/billing-form';
import { DashboardHeader } from '@hub/shadcn-ui/header';
import { Icons } from '@hub/shadcn-ui/icons';
import { ProtectedRoute } from '@hub/shadcn-ui/protected-route';
import { DashboardShell } from '@hub/shadcn-ui/shell';
import { Alert, AlertDescription, AlertTitle } from '@hub/shadcn-ui/ui/alert';
import { stripe } from '@hub/stripe';

export const metadata = {
  title: 'Billing',
  description: 'Manage billing and your subscription plan.',
};

export default async function BillingPage() {
  const subscriptionPlan = {
    isPro: false,
    stripeCustomerId: 1,
    stripeSubscriptionId: '1',
    stripeCurrentPeriodEnd: 1,
    name: '',
    description: '',
    stripePriceId: '',
  };
  // If user has a pro plan, check cancel status on Stripe.
  let isCanceled = false;
  if (subscriptionPlan.isPro && subscriptionPlan.stripeSubscriptionId) {
    const stripePlan = await stripe.subscriptions.retrieve(
      subscriptionPlan.stripeSubscriptionId
    );
    isCanceled = stripePlan.cancel_at_period_end;
  }

  return (
    <ProtectedRoute redirectPath='dashboard/billing'>
      <DashboardShell>
        <DashboardHeader
          heading='Billing'
          text='Manage billing and your subscription plan.'
        />
        <div className='grid gap-8'>
          <Alert className='!pl-14'>
            <Icons.Warning />
            <AlertTitle>This is a demo app.</AlertTitle>
            <AlertDescription>
              Swipe app is a demo app using a Stripe test environment. You can
              find a list of test card numbers on the{' '}
              <a
                href='https://stripe.com/docs/testing#cards'
                target='_blank'
                rel='noreferrer'
                className='font-medium underline underline-offset-8'
              >
                Stripe docs
              </a>
              .
            </AlertDescription>
          </Alert>
          <BillingForm
            subscriptionPlan={`{
              ...subscriptionPlan,
              isCanceled,
            }`}
          />
        </div>
      </DashboardShell>
    </ProtectedRoute>
  );
}
