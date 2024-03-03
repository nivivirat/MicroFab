import React, { useState } from "react";
import top1 from "../../assets/medicalDevices/top.svg";
import { Icon } from "@iconify/react";
import col1 from '../../assets/medicalDevices/col1.svg';
import col2 from '../../assets/medicalDevices/col2.svg';
import col3 from '../../assets/medicalDevices/col3.svg';
import col4 from '../../assets/medicalDevices/col4.svg';

import Catheters_IV from '../../assets/medicalDevices/Catheters_IV.svg';
import Cannula_Scalp from '../../assets/medicalDevices/Cannula_Scalp.svg';
import Vein_Sets from '../../assets/medicalDevices/Vein_Sets.svg';
import IV_Infusion_Pump_Sets from '../../assets/medicalDevices/IV_Infusion_Pump_Sets.svg';
import IV_Fluid_Bags from '../../assets/medicalDevices/IV_Fluid_Bags.svg';
import IV_Tubing from '../../assets/medicalDevices/IV_Tubing.svg';
import Syringes from '../../assets/medicalDevices/Syringes.svg';
import IV_Extension_Sets from '../../assets/medicalDevices/IV_Extension_Sets.svg';
import IV_Stopcocks from '../../assets/medicalDevices/IV_Stopcocks.svg';
import IV_Filters from '../../assets/medicalDevices/IV_Filters.svg';
import IV_Blood_Administration_Sets from '../../assets/medicalDevices/IV_Blood_Administration_Sets.svg';
import Infusion_Set_Needles from '../../assets/medicalDevices/Infusion_Set_Needles.svg';
import Pressure_Infusors from '../../assets/medicalDevices/Pressure_Infusors.svg';
import IV_Drip_Chambers from '../../assets/medicalDevices/IV_Drip_Chambers.svg';
import Safety_IV_Cathers from '../../assets/medicalDevices/Safety_IV_Cathers.svg';
import IV_Administration_Sets_with_Flow_Regulators from '../../assets/medicalDevices/IV_Administration_Sets_with_Flow_Regulators.svg';
import Peripheral_IV_Cannula_Dressing_Kits from '../../assets/medicalDevices/Peripheral_IV_Cannula_Dressing_Kits.svg';
import m2 from '../Product/image 45.svg';
import m1 from '../Product/image 46.svg';
import m4 from '../Product/WhatsApp Image 2023-11-16 at 14.07 1.svg';
import m3 from '../Product/39e46a4d-ddaa-484b-9c21-531fcab6aaec-PhotoRoom 1.svg';

export default function MedicalDevicesCard({ img, heading, content, link }) {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
    window.location.href = link;
  };
  const handleCardClick = () => {
    // Redirect to the specified link when the card is clicked
    window.location.href = link;
  };

  const images = {
    col1,
    col2,
    col3,
    col4,
    m1,
    m2,
    m3,
    m4,
    Catheters_IV,
    Cannula_Scalp,
    Vein_Sets,
    IV_Infusion_Pump_Sets,
    IV_Fluid_Bags,
    IV_Tubing,
    Syringes,
    IV_Extension_Sets,
    IV_Stopcocks,
    IV_Filters,
    IV_Blood_Administration_Sets,
    Infusion_Set_Needles,
    Pressure_Infusors,
    IV_Drip_Chambers,
    Safety_IV_Cathers,
    IV_Administration_Sets_with_Flow_Regulators,
    Peripheral_IV_Cannula_Dressing_Kits
  };

  console.log(link);

  const generateRoute = (product) => {
    if (product.routerName) {
      const headingSlug = product.routerName ? product.routerName.replace(/\s+/g, '-') : 'no-heading';
      return `/#/product/${product.id}/${headingSlug}`;
    } else {
      return `/#/${link}`;
    }
  };

  return (

    <div
      className={`md:m-2 lg:w-[22%] md:w-[250px] w-full flex flex-col shadow-lg rounded-[20px]`}
    >
      <a href={generateRoute(link)}>
        <div className="md:h-[190px] w-full">
          <img
            src={images[img] || img}
            alt="Medical Device"
            className="w-full h-full rounded-[16px] object-cover"
          />
        </div>
        <div className="md:h-[60px] flex flex-row justify-between place-items-center p-5">
          <h3 className="text-[16px] font-semibold">{heading}</h3>
          {showContent ? (
            <div className="bg-primary rounded-full text-white p-2">
              {/* <Icon icon="majesticons:arrow-down" /> */}
              <Icon icon="ic:baseline-minus" />
            </div>
          ) : (
            <div className="bg-primary rounded-full text-white p-2">
              {/* <Icon icon="majesticons:arrow-right" className="" /> */}
              <Icon icon="ic:baseline-plus" />
            </div>
          )}
        </div>
        {showContent && (
          <p className="text-[14px] font-thin opacity-70 px-5 pb-5">{content}</p>
        )}
      </a>
    </div>
  );
}
