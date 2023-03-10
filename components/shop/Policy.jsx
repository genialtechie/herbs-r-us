import React from 'react';

const Policy = () => {
  return (
    <div className="w-4/5 container mx-auto">
      <h1 className="my-10 text-4xl font-bold text-theme text-center w-full">
        Sales Policy
      </h1>
      <p className="text-lg">
        Each jar of herbs is hand blended and hand poured. We use only the
        highest quality herbs and essential oils. We do not use any fillers or
        preservatives. Our products are made in small batches to ensure the
        highest quality. Each jar contains approximately 7 ounces of product.
        Enough to last 2-3 weeks with daily use. Enjoy!
        <br />
        <br />
        For best results, diet and exercise are recommended. By avoiding meat,
        dairy, processed foods, and alcohol, the herbs will absorb into your
        system without having to compete with other toxins you consume. These
        products are not intended to diagnose, treat, cure, or prevent any
        disease. If you are pregnant, nursing, taking medication, or have a
        medical condition, please consult your physician before using these
        products. Keep out of reach of children.
        <br />
      </p>
      <div>
        <h1 className="my-3 text-2xl font-bold text-theme text-center lg:text-left w-full">
          Directions
        </h1>
        <p className="text-lg">
          1 teaspoon of herbs equals 1 cup of boiling water. Tea should be
          steeped for 10 minutes before serving. You can drink up to three times
          per day. You can also combine up to three teas, but make sure to use
          three cups of water.
        </p>
      </div>
      <div>
        <h1 className="my-3 text-2xl font-bold text-theme text-center lg:text-left w-full">
          Refunds
        </h1>
        <ul className="list-disc list-inside mb-10 text-lg">
          <li>
          Once the herbs have been prepared and shipped, there are NO REFUNDS.
          </li>
          <li>
          Please double-check your shipping address before submitting your order.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Policy;
