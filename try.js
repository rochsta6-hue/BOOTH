document.addEventListener("DOMContentLoaded", () => {
    // ==========================================
    // 1. REGION DATA CONFIGURATION
    // ==========================================
    const regionData = {
        'ilocos': { name: 'Region I (Ilocos Region)', colorName: 'High Risk Red', colorHex: '#d63031', info: 'High historical peak (732 cases).', inc2026: 'Fire incidents in Ilocos Norte remained steady at 27 cases from January to mid-February 2026.', inc2025: 'There were 554 fire incidents recorded in the year 2025.', inc2024: 'There were 694 fire incidents recorded in the year 2024.', inc2023: '732 fire incidents were recorded. Of the total, 266 were in Pangasinan, which has the biggest land area and population among the provinces in the region, followed by Ilocos Norte, 196; Ilocos Sur, 145; and La Union, 125.', inc2022: 'N/A, no proper reports were found.', causes: 'Across Region I (Ilocos Region), fire incidents are primarily caused by a combination of electrical system failures and human activity involving open flames, both of which are intensified by high temperatures and dense living conditions. In Pangasinan and Ilocos Sur, electrical issues—such as overloaded extension cords, octopus wiring, and faulty fuse box connections—serve as major fire triggers, often exacerbated by extreme summer heat. Meanwhile, in Ilocos Norte and La Union, open flames are the chief hazard, stemming from unattended candles during power outages, open cooking, smoking, and agricultural burning practices like kaingin and rubbish disposal.', prominentIncident: 'A massive fire engulfed the wet market in San Fernando, La Union on January 11, 2024, destroying at least 1,000 stalls. The fire took five hours to contain and caused an estimated ₱200 million in damage. Because of the extensive destruction and its impact on businesses and vendors, the city was placed under a State of Calamity on January 19, 2024. The incident is considered a big fire incident because it destroyed around 1,000 stalls, caused ₱200 million in property losses, and severely affected the livelihoods of many vendors and business owners..', goals: 'Fire prevention in the Ilocos Region targets electrical maintenance, open flame safety, and dry-season hazard controls. Pangasinan and Ilocos Sur focus on inspecting faulty wiring, resolving overloaded outlets, and keeping access roads clear for emergency responders. Meanwhile, Ilocos Norte manages open flames by regulating agricultural burning (kaingin) and waste disposal, while La Union promotes battery-powered lighting over candles during power outages to prevent accidental fires.' },
        'cagayanvalley': { name: 'Region II (Cagayan Valley)', colorName: 'Low Risk Yellow', colorHex: '#f1c40f', info: 'Full-year counts consistently under 400.', inc2026: 'No official published fire statistics in Cagayan Valley Region for this year.', inc2025: 'January to December: 304 fire incidents recorded in the entire Cagayan Valley Region.', inc2024: 'January to December: 393 fire incidents recorded in the entire Cagayan Valley Region.', inc2023: 'January to February: 33 fire incidents recorded in the entire Cagayan Valley Region.', inc2022: 'January to December: 312 fire incidents recorded in the entire Cagayan Valley Region.', causes: 'Across Region II (Cagayan Valley), fire incidents are predominantly driven by electrical system failures, fuel handling accidents, and appliance hazards. Throughout Cagayan, Batanes, and Isabela, electrical faults—such as short circuits, overloaded wiring, defective installations, and loose connections—remain the leading cause of blazes, as highlighted by regional Bureau of Fire Protection reports and commercial incidents like the 2025 Jones public market fire. In Nueva Vizcaya, overheated household appliances, such as electric fans igniting nearby combustible materials, serve as a frequent trigger. Additionally, Quirino faces distinct hazards from open flames and fuel-related industrial accidents, demonstrated by a major ₱15 million fire in Maddela during a fuel transfer operation.', prominentIncident: 'A devastating fire started in a poultry farm in Solana, Cagayan. Estimating up to ₱17 million worth of property destroyed in the process. According to the Cagayan Provincial Information Office, the affected facility was Maristle Poultry Farm, owned by Dr. Mario Genovesa. The cause of the fire was combustible materials inside the poultry, luckily there weren’t any chickens there to begin with. It was stated by the farm caretaker Butch Borquillo that the employees did not immediately notice the smoke because the facility was closed. The blaze escalated to the second alarm, prompting additional firefighting units. This fire incident is prominent as a huge sum of money has dissipated.', goals: 'In Cagayan Valley, mitigation efforts center on electrical safety, device monitoring, and fuel management. Batanes, Cagayan, and Isabela emphasize routine wiring inspections and public awareness regarding appliance defects, while Nueva Vizcaya targets overheating by urging residents to unplug unused electronics and ensure proper ventilation. Quirino addresses fuel and LPG risks through strict hose leak checks, non-smoking rules near storage areas, and specialized safety training for handling flammable liquids.' },
        'centralluzon': { name: 'Region III (Central Luzon)', colorName: 'High Risk Red', colorHex: '#d63031', info: 'Consistently above 750 cases/year.', inc2026: 'N/A', inc2025: '785 fire incidents recorded in the entire Central Luzon Region. ', inc2024: '1079  fire incidents recorded in the entire Central Luzon Region.', inc2023: 'No official fire incident published, but BFP noted an increased incidents during this year.', inc2022: '852 fire incidents recorded in the entire Central Luzon Region.', causes: 'According to BFP Regional Public Information Unit Chief FSupt. Maria Leiah Sajili, faulty wiring and overloaded circuits remain among the leading causes of fire in Central Luzon. In addition, the season is a factor to be considered, due to the reason that fire risks are heightened during the dry season. In a recent case, a fire with thick smoke broke out at the Pampanga Public Market in Angeles City, Pampanga, on Wednesday, Sept. 16, 2026. It reached the fifth alarm that affected an estimated 300 stalls. According to the City Information Office, the blaze reportedly started at Passage 1 and affected the old market building housing the sari-sari and wet sections.', prominentIncident: 'On September 16, 2026, a devastating 5th-alarm fire swept through the heavily populated Pampang Public Market in Angeles City. The fire rapidly engulfed dry goods sections and market stalls, destroying extensive commercial stock and displacing over 400 local vendors. Beyond the physical damage, the blaze dealt a heavy blow to the livelihoods of hundreds of families relying on the market. The incident is considered a big fire incident because it reached a high alarm level, destroyed a major public trading center, and severely impacted hundreds of local livelihoods.', goals: 'The Bureau of Fire Protection (BFP)  Region 3 has heightened its efforts in terms of its safety advocacy throughout Central Luzon to address the rise of fire incidents that happen during the dry season due to issues such as improper wiring, overloaded circuits, and unattended cooking stoves. In order to sustain the decrease in the number of fire incidents, the bureau advises homeowners to do routine inspections, use certified materials, never leave any open flame, and have easy access to fire equipment such as fire extinguishers and sand buckets. Moreover, families and businesses should strictly adhere to the fire codes by making sure that their premises have fire exit doors, smoke detectors, and sprinklers, and conduct fire drill exercises. Lastly, people are advised to call their respective fire stations during emergencies.' },
        'calabarzon': { name: 'CALABARZON', colorName: 'High Risk Red', colorHex: '#d63031', info: 'Consistently above 1,200 cases/year.', inc2026: 'No official published fire statistics in the entire CALABARZON Region for this year.', inc2025: '1,289 fire incidents recorded in the entire CALABARZON Region.', inc2024: '1,830 fire incidents recorded in the entire CALABARZON Region. ', inc2023: '1,438 fire incidents recorded in the entire CALABARZON Region.', inc2022: '907 fire incidents recorded in the entire CALABARZON Region.', causes: 'Across CALABARZON (Region IV-A), fire incidents are primarily caused by widespread electrical system failures, industrial hazards, and domestic negligence. In Cavite, Laguna, Rizal, and Quezon, faulty wiring, overloaded distribution networks, electrical arcing, and short circuits—such as sparks from ceiling lights or commercial display equipment—frequently trigger large-scale residential and commercial blazes. Additionally, Laguna and Rizal report significant risks from machine overheating and unattended cooking. Beyond typical structural hazards, Batangas faces specialized risks driven by industrial chemical factors—including the spontaneous combustion of hazardous manufacturing waste—alongside seasonal agricultural threats like grass fires and open land clearing.', prominentIncident: 'Calamba Trade Center in Laguna suffered damage due to fire that occurred on Thursday, June 9, 2022, in the early hours of the morning and resulted in ₱3 million worth of damages to the clothing and dry goods. According to information available from Calamba City Fire Station, the fire occurred at 2:20 AM and was caused by sparks from a billboard which then ignited flammable goods in seven shops underneath. The fire was controlled at 3:29 AM and there were no casualties reported.', goals: 'To combat an 87% surge in fire losses reaching ₱2.8 billion, BFP CALABARZON (Region 4A) stepped up Fire Code enforcement across Laguna and Batangas through joint inspections and visitations of factories and warehouses to eliminate electrical and material hazards. Alongside these industrial efforts, households are urged to inspect wiring, avoid overloading sockets, and unplug unused gadgets to drive region-wide safety compliance.' },
        'mimaropa': { name: 'MIMAROPA', colorName: 'Low Risk Yellow', colorHex: '#f1c40f', info: 'Averages below 350 cases/year.', inc2026: 'N/A', inc2025: '312 fire incidents recorded in the entire MIMAROPA Region.', inc2024: '429 fire incidents recorded in the entire MIMAROPA Region.', inc2023: '56 fire incidents recorded in the city of Puerto Princesa.', inc2022: 'No proper reports were found.', causes: 'According to BFP MIMAROPA Fire Inspector Arvien D. Alcazar, electrical faults during the dry season are the leading cause of fires, highlighting the need for regular wiring checks and avoiding overloaded outlets. The severe risk of rapid fire spread was demonstrated in Puerto Princesa City, where a massive structural fire exacerbated by strong winds destroyed around 450 light-material homes in two coastal barangays, displacing about 920 families.', prominentIncident: 'On September 9, 2026, a fire broke out aboard the vessel of the MV June Aster off the waters of Barangay Marcilla in Coron, Palawan. As per the Philippine Coast Guard (PCG), the death toll from the fire that gutted it rose to 77 after a crew member who initially survived the incident died at a hospital. In a statement on Wednesday, PCG spokesperson Commodore Noemie Cayabyab said the crew member was declared dead by the Culion Sanitarium and General Hospital at around 11:34 a.m. Tuesday. The number of survivors has since dropped to 43, while 12 individuals remain missing out of the 132 listed in the vessels ticket manifest', goals: 'To combat seasonal fire risks during the dry season, BFP MIMAROPA expanded its regional campaign to target electrical failure, the leading cause of structural fires in the archipelago. Fire experts conduct community visibility campaigns promoting regular home wiring checks, avoiding overloaded extension cords, unplugging unused appliances, and prioritizing emergency hotlines over social media during fire threats to establish proactive local defense.' },
        'bicol': { name: 'Region V (Bicol Region)', colorName: 'Moderate Risk Orange', colorHex: '#e67e22', info: 'Consistently ranges between 600-650 cases.', inc2026: 'N/A', inc2025: '656 fire incidents recorded in the entire Bicol Region.', inc2024: '633 fire incidents recorded for the first semester of the entire Bicol Region.', inc2023: '383 fire incidents recorded for the first semester of the entire Bicol Region.', inc2022: '614 fire incidents recorded in the entire Bicol Region.', causes: 'According to BFP-Bicol spokesperson Senior Insp. Edgar Tañajura Jr., top regional fire causes include faulty wiring, dry grass, lighted cigarette butts, and electrical hazards like substandard wiring and octopus connections. Recommending immediate emergency reporting over social media use and regular appliance unplugging, these risks were underscored by a 2026 fire in Barangay Almendras that destroyed six homes and displaced nine families.', prominentIncident: 'According to a recent report in Bicol News, a fire broke out in Purok 3, Barangay Almendras in Sorsogon City on April 17, 2026, Friday morning, destroying six houses and displacing nine families. Initial reports said the blaze started around 9:30 a.m., leaving residents with no belongings saved except the clothes they were wearing. In addition to the six houses that were totally destroyed, one house was partially damaged, while a mausoleum in the area was also affected.', goals: 'To handle the issue of fire incidents in Bicol Region, fire authorities should consider giving awareness to people about dangerous practices and technical errors that occur frequently such as faulty electrical connections, dried grass and leaves that are improperly stored, and smoking materials that have been carelessly dropped into garbage containers, which act as fire triggers in the area. Authorities should especially be concerned with eliminating utility problems in the homes and informing families that serious electrical failures like overheating, overloaded grids, and short-circuiting would be greatly intensified when using substandard electrical devices.' },
        'westernvisayas': { name: 'Region VI (Western Visayas)', colorName: 'High Risk Red', colorHex: '#d63031', info: 'Extreme high-end outlier in 2024 (3,472 cases).', inc2026: '141 fire incidents recorded in the Iloilo and Bacolod Region', inc2025: '1,638 fire incidents recorded in the entire Western Visayas Region.', inc2024: '3,472 fire incidents recorded in the entire Western Visayas Region.', inc2023: '1,285 structural fire incidents recorded in the entire Western Visayas Region.', inc2022: '195 fire incidents recorded in the Iloilo Region.', causes: 'According to a data table presented in Kenneth Occeno’s study, electrical post fire is the number one cause of fire incidents in Western Visayas with a frequency of 1,596, followed by  short circuits with a frequency of 868. In line with the aforementioned causes, a total of seven houses were destroyed in a fire that broke out in Barangay Sooc, Arevalo District, Iloilo City, and in Barangay Mansilingan, Bacolod City on December 19, 2024. According to Sala (2024), the fire spread quickly to neighboring houses. A video recording of a resident showed that neighbors tried to put the fire out, but the blaze already destroyed two houses. Four other houses were partially damaged. A total of seven houses were destroyed in a fire that broke out in Barangay Sooc, Arevalo District, Iloilo City, and in Barangay Mansilingan, Bacolod City.', prominentIncident: 'A fire in Rizal Street, Barangay 7, Roxas City, Capiz on February 27, 2024, destroyed around 150 houses and claimed the lives of two senior citizens. Firefighters took about an hour to contain the blaze due to strong winds, hot weather, and narrow roads. The BFP estimated the property damage at approximately ₱1.5 million. The reason for the fire remains undetermined.', goals: 'Fire prevention in Western Visayas centers on structural electrical maintenance and community preparedness to prevent fires in closely built neighborhoods. Key actions include hiring qualified electricians to fix faulty wiring and avoid outlet overload, maintaining clear emergency pathways, equipping homes with smoke alarms and extinguishers, and educating residents to quickly identify electrical hazards.' },
        'centralvisayas': { name: 'Region VII (Central Visayas)', colorName: 'High Risk Red', colorHex: '#d63031', info: 'Peak near 2,000 cases in 2024.', inc2026: '47 fire incidents recorded in the Cebu Region.', inc2025: '1,173 fire incidents recorded in the entire Central Visayas Region.', inc2024: '1,981 fire incidents recorded in the entire Central Visayas Region.', inc2023: '956 structural fire incidents recorded in the entire Central Visayas Region.', inc2022: '974 structural fire incidents recorded in the entire Central Visayas Region.', causes: 'According to the fire data report of Bureau of Fire Protection in 2023, out of the 1,320 recorded fire incidents in Central Visayas, the most prominent cause of fire is electrical ignition caused by arcing .It totaled 181 fire incidents. An article from GMA News reported a fire incident that destroyed 7 houses, with electrical ignition as the main reason speculated.', prominentIncident: 'A massive fire struck Barangay Punta Princesa, Cebu City on June 11, 2022, affecting at least five sitios (Tuburan, Trinidad, Enriquez, Arca, and Little Bamboo) and destroying at least 677 homes. The incident left one person dead, displaced around 850 families (equivalent to 3,475 individuals), and caused approximately ₱16.5 million in property damage. Authorities initially suspected arson as the cause of the fire.', goals: 'Central Visayas focuses on eliminating electrical arcing and overheating through regular inspections and professional maintenance of wiring, circuit breakers, and appliances. Public awareness campaigns emphasize avoiding overloaded extension cords and recognizing early hazard warnings—such as sparks, flickering lights, burning odors, and warm outlets—to resolve risks before ignition occurs.' },
        'easternvisayas': { name: 'Region VIII (Eastern Visayas)', colorName: 'Low Risk Yellow', colorHex: '#f1c40f', info: 'Low annual totals remaining under 360.', inc2026: '60 fire incidents recorded in the entire Eastern Visayas Region.', inc2025: '354 fire incidents recorded in the entire Eastern Visayas Region.', inc2024: '336 fire incidents recorded in the entire Eastern Visayas Region.', inc2023: '236 structural fire incidents recorded in the entire Eastern Visayas Region.', inc2022: '248 fire incidents recorded in the entire Eastern Visayan Region.', causes: 'According to the fire data report of Bureau of Fire Protection in 2023, out of the 261 recorded fire incidents in Eastern Visayas, the most prominent cause of fire is open flame from cooking. It totaled 40 fire incidents. A close second is electrical ignition caused by arcing  resulting in 38 fire incidents . These causes prove that residential fires are very common and are easily activated. An article from INQUIRER.net reported a residential fire incident that killed a mother and her two children in Leyte. Authorities said the three were sleeping inside the house when the fire started.', prominentIncident: 'According to Gabieta (2024), a grass fire burned seven hectares of agricultural land and vegetation across three barangays in Hinunangan, Southern Leyte, affecting six families and causing ₱50,000 in damage. The fire, which started on August 31, was reported five hours later and took responders from multiple stations over ten hours of containment efforts before being fully extinguished early on September 1.', goals: 'Eastern Visayas addresses fire hazards through kitchen safety, electrical maintenance, and home emergency readiness. Recommended measures include monitoring active cooking flames, replacing damaged wiring via licensed professionals, installing smoke alarms and accessible extinguishers, and teaching families clear evacuation plans to protect sleeping occupants during sudden residential blazes.' },
        'zamboangapeninsula': { name: 'Region IX (Zamboanga Peninsula)', colorName: 'High Risk Red', colorHex: '#d63031', info: 'Mean well above 700 threshold.', inc2026: '120 houses were destroyed in a fire incident recorded in the entire Zamboanga Peninsula Region.', inc2025: '973 fire incidents recorded in the entire Zamboanga Peninsula Region.', inc2024: '1,490 fire incidents recorded in the entire Zamboanga Peninsula Region.', inc2023: '887 fire incidents recorded in the entire Zamboanga Peninsula Region', inc2022: '392 fire incidents recorded in the entire Zamboanga Peninsula Region.', causes: 'Across Region IX (Zamboanga Peninsula), fire incidents are predominantly driven by electrical faults, domestic open flame negligence, and the rapid spread of flames through high-density light-material structures. In Zamboanga del Sur and Zamboanga Sibugay, faulty electrical connections—specifically "octopus" wiring and circuit overloads—serve as primary triggers for devastating blazes in residential areas and commercial public markets. Meanwhile, in Zamboanga del Norte, unattended domestic open flames, such as unsupervised firewood burning and candles left lit during the night, remain major hazards that displace numerous families.', prominentIncident: 'An article from Philippine News Agency reported that a fire started at the public market of Ipil, the capital town of Zamboanga Sibugay, before midnight June, 2022. No casualties were reported, however, P16.2 million worth of properties went up in smoke that started from “octopus” electrical wiring resulting in a capacity overload.', goals: 'To mitigate the cases of fire risks and incidents in Zamboanga Peninsula by observing proper attentiveness in appliances or things prone in causing destructive fires once left unattended such as lit candles and firewood burnings, which are the common causes of fire incidents in Zamboanga Del Norte. Concurrently, regular inspection of each household’s electrical system should be conducted, to amend faulty wires (which is the leading cause of fire incidents in Zamboanga Del Sur and Zamboanga Sibugay) before it could lead to a destructive and massive fire. In addition, fire precaution and suppression programs should be heavily implemented in each barangay and school to enlighten each individual about the proper way of suppressing fire, how to avoid it and what are the safety precautions to be done.' },
        'northernmindanao': { name: 'Region X (Northern Mindanao)', colorName: 'High Risk Red', colorHex: '#d63031', info: 'Consistently above 800 cases/year.', inc2026: '644 fire incidents recorded in the entire N. Mindanao Region.', inc2025: '886 fire incidents recorded in the entire N. Mindanao Region.', inc2024: '1,454 fire incidents recorded in the entire N. Mindanao Region.', inc2023: '998 fire incidents recorded in the entire N. Mindanao Region.', inc2022: '807 fire incidents recorded in the entire N. Mindanao Region.', causes: 'Across Region X (Northern Mindanao), fire incidents are primarily caused by domestic negligence, unattended open flames, and domestic accidents involving light-material structures. In Bukidnon, hazards arise from kitchen accidents—such as spilled cooking oil igniting near active open embers—while in Lanao del Norte and Camiguin, unattended lighted candles and faulty electrical wiring frequently trigger destructive blazes. The widespread use of flammable, light building materials across residential areas in provinces like Misamis Oriental and Lanao del Norte significantly accelerates the spread of these fires once ignited.', prominentIncident: 'According to Gorit, GL.(2026) from philstar, Two children died in a fire that destroyed a house in Ozamiz City, Misamis Oriental. The estimated damage to property caused by the fire is at P125,000. The fatalities were reported to be trapped inside the house made of light materials, according to the city disaster risk reduction and management office.',goals: 'To mitigate fire incidents in each province by implementing fire precaution and suppression programs to educate individuals on what should be done and what should not be done before, during and after the aforementioned crisis. Additionally, proper attentiveness should be observed especially with tasks involving fire (such as cooking) and if near things prone in causing massive fires (such as lit candles), due to the reason that human negligence is one of the primary causes of fire incidents in Bukidnon, Camiguin and Lanao Del Norte. Since faulty electrical wiring is included in the primary causes of fire incidents in Northern Mindanao, regular inspection of  each household’s electrical systems should be applied, to amend or replace faulty wirings, circuits, breakers or outlets before it can result in a spark which leads to a massive fire.' },
        'davao': { name: 'Region XI (Davao Region)', colorName: 'High Risk Red', colorHex: '#d63031', info: 'Consistently >1,000 incidents every year.', inc2026: '683 fire incidents recorded in the entire Davao Region.', inc2025: '1,253 fire incidents recorded in the entire Davao Region.', inc2024: '1,712 fire incidents recorded in the entire Davao Region.', inc2023: '1,323 fire incidents recorded in the entire Davao Region.', inc2022: '1,093 fire incidents recorded in the entire Davao Region.', causes: 'Across Region XI (Davao Region), fire hazards stem from a mix of environmental factors, industrial expansion, and domestic electrical faults. In Davao del Sur, Davao Occidental, and Davao del Norte, electrical ignition—such as faulty wiring, short circuits, and overheated household appliances—serves as the primary cause of frequent residential, school, and commercial building fires. Rapid commercial development and cooking negligence also contribute to the rising incident counts in urbanized areas. In contrast, rural areas like Davao de Oro face severe ecological hazards from uncontrolled wildfires and forest fires, where human activity and dry conditions ignite vast hectares of forestland.', prominentIncident: 'According to Davao Local News Mindanao, a massive fourth-alarm fire hit a densely populated community in Barangay 23-D, Davao City, on May 8, 2026. The BFP Region XI reported that the blaze started around 8 p.m., affecting about 150 houses, displacing over 200 families (around 300 individuals), and causing one second-degree burn injury before being brought under control shortly after 1 a.m. the following morning.', goals: 'The reduction of fire incidents in the Davao Region should be based on how each community would strengthen their fire prevention while properly acknowledging the common risks in each province. In Davao de Oro, proper monitoring of forest areas and controlled management of activities involving fire can help prevent wildfires. In Davao del Norte, residents and establishments should practice safe cooking and regularly inspect electrical systems. The people of Davao del Sur and Davao Occidental should prioritize electrical inspections, proper appliance use, and avoid overloading outlets. Meanwhile, Davao Oriental should strengthen community fire prevention knowledge and preparedness to protect families from future fire incidents.' },
        'soccsksargen': { name: 'Region XII (SOCCSKSARGEN)', colorName: 'Moderate Risk Orange', colorHex: '#e67e22', info: 'Moderate range peaking at 648 cases.', inc2026: 'fire incidents recorded in the entire SOCCSKSARGEN.', inc2025: '410 fire incidents recorded in the entire SOCCSKSARGEN.', inc2024: '648 fire incidents recorded in the entire SOCCSKSARGEN.', inc2023: '405 fire incidents recorded in the entire SOCCSKSARGEN.', inc2022: '361 fire incidents recorded in the entire SOCCSKSARGEN.', causes: 'Across Region XII (SOCCSKSARGEN), fire incidents stem from a mix of electrical-related faults, high ambient temperatures, vehicular component overheating, and domestic kitchen hazards. In Sarangani and South Cotabato, electrical-related issues—often aggravated by hot weather—serve as primary causes of blazes in both residential areas and commercial establishments like printing and upholstery shops. South Cotabato also sees significant risk from unattended kitchen fires, while Sultan Kudarat faces distinct hazards from overheating vehicle parts catching fire on the road.', prominentIncident: 'According to Gomez et al. (2024), El Niño-driven heat waves triggered notable wildfires across Mindanao and Visayas, including a four-hour wildfire within the General Santos City airport compound during peak heat indices of 38–40°C that reached near the traffic control tower before being extinguished without property damage. Additionally, a concurrent grass fire in Mlang, Cotabato, spread into and destroyed portions of an oil palm plantation.', goals: 'To reduce fire incidents in SOCCSKSARGEN, each province should address the specific causes identified in each region. In Cotabato, communities should strengthen fire-prevention education and emergency preparedness. In Sarangani, regular inspection and maintenance of electrical wirings in houses and businesses should be conducted. In South Cotabato, residents should practice proper kitchen and electrical safety, especially during hot weather, by never leaving cooking unattended or overloading outlets. Lastly, in Sultan Kudarat, vehicle owners should regularly inspect engines and other heat-producing components for signs of overheating and have damaged parts be repaired immediately.' },
        'caraga': { name: 'Region XIII (Caraga)', colorName: 'Moderate Risk Orange', colorHex: '#e67e22', info: 'Stable midpoint around 500 cases/year.', inc2026: 'A fire incident in Caraga State University recorded in the entire Caraga Region.', inc2025: '486 fire incidents recorded in the entire Caraga Region.', inc2024: '676 fire incidents recorded in the entire Caraga Region.', inc2023: '510 fire incidents recorded in the entire Caraga Region.', inc2022: '365 fire incidents recorded in the entire Caraga Region.', causes: 'According to the Bureau of Fire Protection (BFP) Caraga, the most common causes of fire in the region in 2024 were electrical connections and installations, open flames, and unattended cooking, with electrical-related incidents identified as the most frequently recorded cause. The BFP reminded households to remain vigilant by checking potential fire hazards, practicing good housekeeping, and ensuring that cooking and other sources of open flames are not left unattended.', prominentIncident: 'In a report by the Philippine Red Cross on October 28, 2025, a residential fire broke out at Purok 13A, Brgy. Limaha, Butuan City, Agusan del Norte in Caraga at 11:45 p.m. on October 26, reaching the 3rd alarm at 12:15 a.m. before being declared fire out at 2:00 a.m., October 27. The incident damaged 29 houses, affecting 40 families or 159 individuals who are currently taking temporary shelter at the Brgy. Limaha Covered Court.', goals: 'Build safer communities in Caraga by cutting down fire incidents through stronger electrical safety, careful handling of open flames, and reducing risky human activities that harm the environment. Implement the different actions in mitigating the cases of fire incidents presented by the Bureau of Fire Protection (BFP) Caraga, such as doing inspections of residential and commercial establishments to raise awareness and prevent incidents, conducting the Fire Square Roadshow, a series of activities with fire safety tips to strengthen community resilience, identifying potential threats of fire ignition  in each household by its owners, proper house keeping and planting trees to mitigate the effects of climate change (which is a factor in fire ignition).' },
        'barmm': { name: 'BARMM', colorName: 'Low Risk Yellow', colorHex: '#f1c40f', info: 'Lowest annual averages nationally (<270).', inc2026: 'Fire incidents recorded in the entire Bangsamoro Autonomous Region in Muslim Mindanao Region.', inc2025: '247 fire incidents recorded in the entire Bangsamoro Autonomous Region in Muslim Mindanao Region.', inc2024: '270 fire incidents recorded in the entire Bangsamoro Autonomous Region in Muslim Mindanao Region.', inc2023: '221 fire incidents recorded in the entire Bangsamoro Autonomous Region in Muslim Mindanao Region.', inc2022: '132 fire incidents recorded in the entire Bangsamoro Autonomous Region in Muslim Mindanao Region.', causes: 'According to the Bureau of Fire Protection (BFP – BARMM) Chief Public Information Unit FSInsp. Atty. Maria Estrellieta Lara, common sources of blaze incidents are faulty electrical wiring, flickering lightbulbs, unattended household appliances, and other light materials that may cause fires. Additionally, on September 5-7, 2023, BARMM recorded three separate fire incidents in some areas of the region, such as in Tawi-Tawi, affecting nearly 1,000 families; in Cotabato City, affecting 40 families; and in Lanao del Sur, affecting two families.', prominentIncident: 'According to Bangsamoro reports, a massive fire destroyed approximately 1,000 homes and displaced 5,000 residents in Barangay Lamion, Bongao, Tawi-Tawi on February 3, 2026. Breaking out around 10:09 p.m., the blaze prompted multi-agency land and sea evacuation efforts before being fully contained by 2:00 a.m. the following morning, with no reported fatalities.', goals: 'To reduce fire incidents in the Bangsamoro Autonomous Region in Muslim Mindanao (BARMM), households should prioritize electrical safety by regularly checking wiring, lightbulbs, outlets, and appliances for damage or signs of overheating. Faulty electrical connections should be consulted and repaired by qualified electricians, while appliances should be unplugged when unused. Residents should also keep light and flammable materials away from electrical sources and/or cooking areas. Since fires can easily affect a community all at once, fire-prevention education and access to basic firefighting equipment in residential areas are a must.' },
        'car': { name: 'CAR (Cordillera)', colorName: 'Low Risk Yellow', colorHex: '#f1c40f', info: 'Annual count rarely breaches 350.', inc2026: 'January to April - There were 141 cases of fire incidents recorded in Cordillera.', inc2025: 'There were 288 cases of fire incidents recorded in the Cordillera Region.', inc2024: 'There were 201 cases of fire incidents recorded in the Cordillera Region.', inc2023: 'There were 352 cases of fire incidents recorded in the Cordillera Region.', inc2022: 'There were 289 cases of fire incidents recorded in the Cordillera Region.', causes: 'According to the BFP-CAR, 144 forest and grassland fires destroyed over 644 hectares across the Cordillera region between January and April 10, 2026. BFP-CAR Information Officer FSupt. Katherine Albino reported that Benguet recorded the highest number of incidents (38), causing around ₱108,000 in damages, followed by Mountain Province (19) and Abra (6). Overall, 81 grassland fires damaged 259.56 hectares across the region, while 63 forest fires ravaged 384.83 hectares in three provinces.', prominentIncident: 'According to the BFP-CAR, 144 forest and grassland fires destroyed over 644 hectares across the Cordillera region between January and April 10, 2026. BFP-CAR Information Officer FSupt. Katherine Albino reported that Benguet recorded the highest number of incidents (38), causing around ₱108,000 in damages, followed by Mountain Province (19) and Abra (6). Overall, 81 grassland fires damaged 259.56 hectares across the region, while 63 forest fires ravaged 384.83 hectares in three provinces.', goals: 'There has been an increase in efforts on the part of the Bureau of Fire Protection – Cordillera Administrative Region (BFP-CAR) for community risk reduction drives to minimize structural fires through aggressive actions against the preventable daily causes of such fires. In response to the growing number of incidents locally, there has been proactivity on the part of the fire authorities regionally in informing the community about safe handling of open flames that might result from unattended cooking with LPG and firewood, as well as lighted candles. At the same time, there is also encouragement to conduct structural vulnerability assessments to minimize electrical faults, such as electrical ignition resulting from arcing and loose connections, as well as overheated home appliances, which are the biggest causes of structural damage to homes '  },
        'ncr': { name: 'NCR (National Capital Region)', colorName: 'High Risk Red', colorHex: '#d63031', info: 'High urban density; consistently >2,400 in recent full years.', inc2026: 'There are 721 cases of fire incidents recorded in Metro Manila up to this time.', inc2025: 'There were 2, 427 cases of fire incidents recorded in Metro Manila', inc2024: 'There were 3,039 cases of fire incidents recorded in Metro Manila.', inc2023: 'There were 80 cases of fire incidents recorded in Metro Manila - most of the fire incidents happened in District 5 and twenty-three of it happened in District 1.', inc2022: 'March 1 to 4 - There were 94 cases of fire incidents recorded in Metro Manila', causes: 'Fire incidents across the National Capital Region stem primarily from electrical failures—such as arcing, loose connections, defective outlets, and grid overloading—and human negligence, including unattended cooking, unmonitored candles, smoking, and improper fire suppression like pouring water on oil fires. These hazards are heavily compounded by structural and socioeconomic factors in congested cities like Taguig, Quezon City, and Makati, where dense housing, flammable building materials, and narrow roadways allow small sparks or localized kitchen fires to rapidly escalate into massive structural blazes.', prominentIncident: 'On September 13, 2025, approximately 500 families were affected by a fire that hit the “Happy Land” area in Tondo, Manila on Saturday evening. According to Bureau of Fire Protection-National Capital Region (BFP-NCR), the fire occurred at Building 7, Helping Compound, Road 10 in Tondo, Manila from the second floor of a two-story residential building made from light materials. The agency reported that the fire burned approximately four buildings, costing P1,500,000 in damage. Approximately 500 families or 1,000 individuals were affected.While no fatality was recorded, the agency noted that the fire injured three individuals: 32 years old, laceration on left knee; 18 years old, laceration at near right eye; and 28 years old, laceration on left little finger and laceration on left posterior arm.', goals: 'To reduce fire incidents in NCR, the main aim should be to minimize fire risks at the community level by addressing some major factors that increase fire hazards. This will include mitigating electrical hazards through maintenance and proper handling of electrical equipment, while at the same time dealing with human errors that cause fire hazards, such as unattended cooking. Risk management will also involve mitigating environmental hazards like combustible objects, stray embers, sparks, and other related hazards, alongside improving infrastructure to diminish the risks of overpopulation and ensure unobstructed emergency access for rapid response.' }
    };


// ==========================================
    // 2. DOM ELEMENTS
    // ==========================================
    const toolBtns = document.querySelectorAll('.tool-btn');
    const sidePanel = document.getElementById('sidePanel');
    const closeBtn = document.getElementById('closeBtn');
    const panelContents = document.querySelectorAll('.panel-content');
    const mapWrapper = document.querySelector('.map-wrapper');
    const tooltip = document.getElementById('regionTooltip');
    const regionInfoDisplay = document.getElementById('region-info-display');
    const svgRegions = document.querySelectorAll('.region');

    let currentPanelId = null;

    // ==========================================
 // ==========================================
 // 3. SIDE PANEL MANAGEMENT
    // ==========================================
    toolBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetPanelId = btn.getAttribute('data-panel');

            // Handle active button states
            toolBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Show active side panel content
            const allPanels = sidePanel.querySelectorAll('.panel-content');
            allPanels.forEach(p => p.style.display = 'none');

            const targetPanel = document.getElementById(targetPanelId);
            if (targetPanel) {
                targetPanel.style.display = 'block';
            }

            sidePanel.classList.add('open');
            currentPanelId = targetPanelId;

            // Activate map colors for interactive panels
            if (['panel-fire', 'panel-causes', 'panel-incidents', 'panel-goals'].includes(targetPanelId)) {
                if (mapWrapper) mapWrapper.classList.add('fire-risk-active');

                // Toggle green hover mode specifically for Goals
                if (targetPanelId === 'panel-goals') {
                    if (mapWrapper) mapWrapper.classList.add('goals-mode-active');
                } else {
                    if (mapWrapper) mapWrapper.classList.remove('goals-mode-active');
                }
            } else {
                if (mapWrapper) {
                    mapWrapper.classList.remove('fire-risk-active');
                    mapWrapper.classList.remove('goals-mode-active');
                }
                hideTooltip();
            }
        });
    });

    function closeSidePanel() {
        sidePanel.classList.remove('open');
        toolBtns.forEach(b => b.classList.remove('active'));
        if (mapWrapper) {
            mapWrapper.classList.remove('fire-risk-active');
            mapWrapper.classList.remove('goals-mode-active');
        }
        currentPanelId = null;
        hideTooltip();
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeSidePanel);
    }

    // Dynamic Helper for Panel Display Updates
    function updatePanelDisplay(panelId, titleText, contentText) {
        const panel = document.getElementById(panelId);
        if (!panel) return;

        let displayBox = panel.querySelector('.dynamic-display');
        if (!displayBox) {
            displayBox = document.createElement('div');
            displayBox.className = 'dynamic-display';
            panel.appendChild(displayBox);
        }
        displayBox.innerHTML = `
            <div class="region-title" style="margin-top: 15px; font-weight: bold; font-size: 1.1rem; color: #fff;">${titleText}</div>
            <div class="region-info" style="margin-top: 8px; color: #bdc3c7; line-height: 1.5;">${contentText}</div>
        `;
    }

    // ==========================================
    // 4. MAP HOVER & TOOLBOX UPDATES
    // ==========================================
    svgRegions.forEach(region => {
        region.addEventListener('mouseenter', (e) => {
            if (!currentPanelId) return;

            const regionId = region.getAttribute('id');
            const data = regionData[regionId] || {
                name: regionId ? regionId.toUpperCase() : 'UNKNOWN REGION',
                colorName: 'Standard Risk',
                colorHex: '#e74c3c',
                info: 'Regional statistics pending evaluation.',
                causes: 'Data under assessment.',
                prominentIncident: 'Data under assessment.',
                goals: 'Establish 24/7 localized fire monitoring units and community training programs.'
            };

            // 1. Show floating tooltip with Region Name
            if (tooltip) {
                tooltip.textContent = data.name;
                tooltip.classList.add('visible');
            }

            // 2. Update Side Panel based on selected tool tab
            if (currentPanelId === 'panel-fire' && regionInfoDisplay) {
                regionInfoDisplay.innerHTML = `
                    <div class="region-title">${data.name}</div>
                    <div class="color-badge-container">
                        <span class="color-box" style="background-color: ${data.colorHex};"></span>
                        <span class="color-name">${data.colorName}</span>
                    </div>
                    <div class="region-info">${data.info}</div>
                
                    <div class="yearly-data-box">
                        <div class="yearly-data-title">Data From 2022-2026</div>
                        <div class="yearly-data-row"><span>2026:</span> <strong>${data.inc2026 || 'N/A'}</strong> </div>
                        <div class="yearly-data-row"><span>2025:</span> <strong>${data.inc2025 || 'N/A'}</strong> </div>
                        <div class="yearly-data-row"><span>2024:</span> <strong>${data.inc2024 || 'N/A'}</strong> </div>
                        <div class="yearly-data-row"><span>2023:</span> <strong>${data.inc2023 || 'N/A'}</strong> </div>
                        <div class="yearly-data-row"><span>2022:</span> <strong>${data.inc2022 || 'N/A'}</strong> </div>
                    </div>
                `;
            } else if (currentPanelId === 'panel-causes') {
                updatePanelDisplay('panel-causes', data.name, data.causes);
            } else if (currentPanelId === 'panel-incidents') {
                const incidentInfo = data.prominentIncident || data.inc2026 || data.inc2025 || data.inc2024 || 'No recent prominent incidents recorded for this region.';
                const incidentsPanel = document.getElementById('panel-incidents');
                if (incidentsPanel) {
                    let displayBox = incidentsPanel.querySelector('#incidents-display');
                    if (!displayBox) {
                        displayBox = document.createElement('div');
                        displayBox.id = 'incidents-display';
                        incidentsPanel.appendChild(displayBox);
                    }
                    displayBox.innerHTML = `
                        <div class="incident-region-name" style="margin-top: 15px; font-weight: bold; font-size: 1.1rem; color: #fff;">${data.name}</div>
                        <div class="incident-info-text" style="margin-top: 8px; color: #bdc3c7; line-height: 1.5;">${incidentInfo}</div>
                    `;
                }
            } else if (currentPanelId === 'panel-goals') {
                // Customized Goals Output (uses region-specific data if present, or structured fallback)
                    const goalsContent = data.goals ? data.goals : `
                    <div class="yearly-data-box" style="border-color: rgba(46, 204, 113, 0.4);">
                        <div class="yearly-data-title" style="color: #2ecc71;">Strategy</div>
						<div class="yearly-data-row" style="margin-top: 8px; color: #bdc3c7; font-size: 0.9rem; line-height: 1.6; text-align: justify;"><strong>${data.goals || 'N/A'}</strong> </div>
                    </div>
                `;
                updatePanelDisplay('panel-goals', `${data.name} — Mitigation Goals`, goalsContent);
            }
        });

        region.addEventListener('mousemove', (e) => {
            if (!currentPanelId || !tooltip) return;
            tooltip.style.left = `${e.clientX}px`;
            tooltip.style.top = `${e.clientY - 15}px`;
        });

        region.addEventListener('mouseleave', () => {
            if (!currentPanelId) return;
            hideTooltip();
        });
    });

    function hideTooltip() {
        if (tooltip) tooltip.classList.remove('visible');
    }

    // ==========================================
    // 5. PHOTOREALISTIC FIRE & EMBERS CURSOR LOGIC
    // ==========================================
    const canvas = document.getElementById('fireCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        let mouseX = width / 2;
        let mouseY = height / 2;
        let isMoving = false;
        let mouseTimer;

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        const particles = [];

        class FireParticle {
            constructor(x, y, isEmber = false) {
                this.x = x + (Math.random() * 12 - 6);
                this.y = y + (Math.random() * 8 - 4);
                this.isEmber = isEmber;

                if (this.isEmber) {
                    this.size = Math.random() * 2 + 1;
                    this.vx = (Math.random() - 0.5) * 3.5;
                    this.vy = -(Math.random() * 5 + 2);
                    this.life = 1.0;
                    this.decay = Math.random() * 0.02 + 0.015;
                    this.color = '#ffaa33';
                } else {
                    this.size = Math.random() * 20 + 15;
                    this.vx = (Math.random() - 0.5) * 1.2;
                    this.vy = -(Math.random() * 2 + 1.5);
                    this.life = 1.0;
                    this.decay = Math.random() * 0.035 + 0.025;
                }
            }

            update() {
                this.x += this.vx + Math.sin(this.life * 10) * 0.5;
                this.y += this.vy;

                if (!this.isEmber) {
                    this.size *= 0.94;
                }

                this.life -= this.decay;
            }

            draw() {
                if (this.life <= 0 || this.size <= 0.1) return;

                ctx.save();
                ctx.globalCompositeOperation = 'screen';

                if (this.isEmber) {
                    ctx.fillStyle = this.color;
                    ctx.globalAlpha = this.life;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                } else {
                    const grad = ctx.createRadialGradient(
                        this.x, this.y, 0,
                        this.x, this.y, this.size
                    );

                    grad.addColorStop(0.0, `rgba(255, 255, 230, ${this.life})`);
                    grad.addColorStop(0.2, `rgba(255, 140, 0, ${this.life * 0.8})`);
                    grad.addColorStop(0.6, `rgba(180, 20, 0, ${this.life * 0.3})`);
                    grad.addColorStop(1.0, `rgba(0, 0, 0, 0)`);

                    ctx.fillStyle = grad;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                }

                ctx.restore();
            }
        }

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            isMoving = true;

            clearTimeout(mouseTimer);

            for (let i = 0; i < 3; i++) {
                particles.push(new FireParticle(mouseX, mouseY, false));
            }

            if (Math.random() < 0.6) {
                particles.push(new FireParticle(mouseX, mouseY, true));
            }

            mouseTimer = setTimeout(() => {
                isMoving = false;
            }, 100);
        });

        function animate() {
            ctx.clearRect(0, 0, width, height);

            if (isMoving && Math.random() < 0.3) {
                particles.push(new FireParticle(mouseX, mouseY, false));
            }

            for (let i = particles.length - 1; i >= 0; i--) {
                particles[i].update();
                particles[i].draw();

                if (particles[i].life <= 0 || particles[i].size < 0.1) {
                    particles.splice(i, 1);
                }
            }

            requestAnimationFrame(animate);
        }

        animate();
    }
});