import React, { useState } from "react";
import top1 from "../../assets/medicalDevices/top.svg";
import { Icon } from "@iconify/react";
import col1 from '../../assets/medicalDevices/col1.svg';
import col2 from '../../assets/medicalDevices/col2.svg';
import col3 from '../../assets/medicalDevices/col3.svg';
import col4 from '../../assets/medicalDevices/col4.svg';

import col1 from '../../assets/medicalDevices/col1.svg';
import col2 from '../../assets/medicalDevices/col2.svg';
import col3 from '../../assets/medicalDevices/col3.svg';
import col4 from '../../assets/medicalDevices/col4.svg';
import col11 from '../../components/Services/images/image 84.svg';
import col21 from '../../components/Services/images/1 (1).svg';
import col31 from '../../components/Services/images/1 (2).svg';
import col41 from '../../components/Services/images/1 (3).svg';
import col12 from '../../components/Services/images/10.svg';
import col22 from '../../components/Services/images/11.svg';
import col32 from '../../components/Services/images/12.svg';
import col42 from '../../components/Services/images/13.svg';
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

import SystemforFormulationLine from '../../assets/turnkeySolutions/SystemforFormulationLine.svg'
import CIPSystems from '../../assets/turnkeySolutions/CIPSystems.svg'
import MixingTanks from '../../assets/turnkeySolutions/MixingTanks.svg'
import PressureVessels from '../../assets/turnkeySolutions/PressureVessels.svg'

export default function MedicalDevicesCard({ index, isOpen, onToggle, img, heading, content }) {
  const toggleContent = () => {
    onToggle(index);
  }

  const [showContent, setShowContent] = useState(false);

  const images = {
    CIPSystems,
    MixingTanks,
    PressureVessels,
    SystemforFormulationLine,
      col1,
    col2,
    col3,
    col4,
    col11,
    col21,
    col31,
    col41,
    col12,
    col22,
    col32,
    col42,
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
    Peripheral_IV_Cannula_Dressing_Kits,

  };


  return (
    <div
      className={`md:m-2 lg:w-[22%] md:w-[250px] w-full flex flex-col shadow-lg rounded-[20px]`}
      onClick={toggleContent}
    >
      <div className="md:h-[190px] w-full">
        <img
          src={images[img]}
          alt="Medical Device"
          className="w-full h-full rounded-[16px] object-cover"
        />
      </div>
      <div className="md:h-[60px] flex flex-row justify-between place-items-center p-5">
        <h3 className="text-[16px] font-semibold">{heading}</h3>
        {isOpen  ? (
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
      {isOpen  && (
        <p className="text-[14px] font-thin opacity-70 px-5 pb-5">{content}</p>
      )}
    </div>
  );
}
