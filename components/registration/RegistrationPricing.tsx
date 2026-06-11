import { conference } from "@/data/conference";
import { registrationPlans } from "@/data/registrationData";

const CheckIcon = ({ featured = false }: { featured?: boolean }) => (
  <svg
    className={`w-4 h-4 shrink-0 ${featured ? "text-white" : "text-ictim-primary"}`}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    aria-hidden="true"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const RegistrationPricing = () => {
  return (
    <section
      className="relative overflow-hidden bg-white py-16 sm:py-20"
      aria-labelledby="registration-pricing-heading"
    >
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-ictim-primary/30 bg-gradient-to-r from-ictim-primary to-[#2563EB] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white mb-5 shadow-sm shadow-ictim-primary/20">
            <span className="h-1.5 w-1.5 rounded-full bg-white/90" aria-hidden="true" />
            Pricing
          </span>
          <h2
            id="registration-pricing-heading"
            className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight"
          >
            Registration Options
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            {conference.location}
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto list-none p-0 m-0">
          {registrationPlans.map((plan) => (
            <li key={plan.id} className="flex">
              <article
                className={`flex w-full flex-col rounded-2xl border p-6 sm:p-8 shadow-sm transition-[box-shadow,border-color] duration-200 ${
                  plan.featured
                    ? "border-ictim-primary/40 bg-gradient-to-br from-ictim-primary to-[#2563EB] shadow-lg shadow-ictim-primary/25"
                    : "border-slate-200/80 bg-white hover:border-ictim-primary/20 hover:shadow-md"
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <h3
                      className={`font-heading text-xl font-semibold ${
                        plan.featured ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {plan.title}
                    </h3>
                    <p
                      className={`mt-1 text-sm leading-relaxed ${
                        plan.featured ? "text-blue-100/90" : "text-slate-500"
                      }`}
                    >
                      {plan.description}
                    </p>
                  </div>
                  {plan.featured && (
                    <span className="shrink-0 rounded-full bg-white/20 border border-white/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                      Popular
                    </span>
                  )}
                </div>

                <div
                  className={`mb-6 pb-6 border-b ${
                    plan.featured ? "border-white/20" : "border-slate-100"
                  }`}
                >
                  <p className="flex items-baseline gap-1.5">
                    <span
                      className={`text-sm font-medium ${
                        plan.featured ? "text-blue-100/80" : "text-slate-500"
                      }`}
                    >
                      {plan.currency}
                    </span>
                    <span
                      className={`font-heading text-4xl sm:text-5xl font-bold tabular-nums ${
                        plan.featured ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {plan.price}
                    </span>
                  </p>
                </div>

                <ul className="flex-1 space-y-3 list-none p-0 m-0">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-2.5 text-sm ${
                        plan.featured ? "text-blue-50/95" : "text-slate-600"
                      }`}
                    >
                      <CheckIcon featured={plan.featured} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RegistrationPricing;
