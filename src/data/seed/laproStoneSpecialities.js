// ─────────────────────────────────────────────────────────────
// data/seed/laproStoneSpecialities.js
// Specialities & Treatments for Patna Lapro and Stone Healthcare
// Led by Dr. Sanjeev Kumar (MBBS, MS, DNB)
// ─────────────────────────────────────────────────────────────

export const laproStoneSpecialities = [

  // ── 1. Laparoscopic Surgery ────────────────────────────────
  {
    name: 'Laparoscopic Surgery',
    slug: 'laparoscopic-surgery',
    icon: '🔬',
    category: 'Surgery',
    available: 'OPD & Emergency',
    description: 'Advanced minimally invasive laparoscopic surgeries by Dr. Sanjeev Kumar (MBBS, MS, DNB). Smaller cuts, faster recovery, and less pain compared to open surgery.',
    features: ['Gallbladder Removal', 'Hernia Repair', 'Appendix Removal', 'Cyst Removal', 'Diagnostic Laparoscopy', 'Minimal Scarring'],
    costEstimate: '₹20,000 – ₹80,000',
    recoveryTime: '1 – 7 days',
    order: 1,
    treatments: [
      {
        name: 'Laparoscopic Cholecystectomy (Gallbladder Removal)',
        slug: 'laparoscopic-cholecystectomy',
        cost: '₹25,000 – ₹60,000',
        duration: '45–90 min',
        recovery: '2–5 days',
        description: 'Minimally invasive removal of the gallbladder through small incisions. The gold standard treatment for gallstones causing pain, jaundice, or cholecystitis.',
        indications: ['Symptomatic gallstones', 'Acute cholecystitis', 'Biliary colic', 'Gallbladder polyps', 'Jaundice from gallstones'],
        benefits: ['3 small cuts instead of large incision', 'Hospital stay 1–2 days', 'Back to work in 5–7 days', 'Less pain & blood loss', 'Low risk of infection'],
        preparation: ['Ultrasound abdomen', 'Blood tests (LFT, CBC)', 'Fast for 6–8 hrs before surgery', 'Inform about all medications'],
        steps: [
          { step: '01', title: 'Consultation & Scan', desc: 'Ultrasound and LFT reviewed; surgical fitness assessed.' },
          { step: '02', title: 'Laparoscopic Procedure', desc: 'Gallbladder removed through 3 small keyhole incisions under general anesthesia.' },
          { step: '03', title: 'Recovery', desc: 'Patient is discharged same day or next morning.' },
          { step: '04', title: 'Follow-up', desc: 'Review in 7 days for wound check; full recovery in 2 weeks.' },
        ],
        faqs: [
          { question: 'Is laparoscopic gallbladder removal safe?', answer: 'Yes. Laparoscopic cholecystectomy is one of the safest surgical procedures with a very low complication rate. Dr. Sanjeev Kumar has performed thousands of such surgeries.' },
          { question: 'Can I live without a gallbladder?', answer: 'Absolutely. The gallbladder is a storage organ. Bile from the liver still reaches your intestine directly. Patients live completely normal lives without it.' },
        ],
      },
      {
        name: 'Laparoscopic Hernia Repair',
        slug: 'laparoscopic-hernia-repair',
        cost: '₹30,000 – ₹70,000',
        duration: '60–90 min',
        recovery: '3–7 days',
        description: 'Minimally invasive repair of inguinal, umbilical, incisional, and epigastric hernias using mesh — with less post-operative pain and faster return to activity.',
        indications: ['Inguinal hernia (groin bulge)', 'Umbilical hernia', 'Incisional hernia (post-surgery)', 'Femoral hernia', 'Recurrent hernia'],
        benefits: ['No large incision', 'Less pain after surgery', 'Lower recurrence rate', 'Back to normal activity in 1 week', 'Both sides can be repaired simultaneously'],
        preparation: ['CT scan if required', 'Blood tests', 'Stop blood thinners as advised', 'Fast 6 hrs before surgery'],
        steps: [
          { step: '01', title: 'Evaluation', desc: 'Clinical examination and ultrasound/CT to confirm hernia type and size.' },
          { step: '02', title: 'Mesh Placement', desc: 'Hernia is reduced and a mesh is fixed laparoscopically to reinforce the abdominal wall.' },
          { step: '03', title: 'Discharge', desc: 'Usually discharged within 24 hours.' },
          { step: '04', title: 'Follow-up', desc: 'Review at 1 week and 1 month; avoid heavy lifting for 3 weeks.' },
        ],
        faqs: [
          { question: 'Does hernia recur after laparoscopic repair?', answer: 'Laparoscopic hernia repair with mesh has a recurrence rate of less than 1-2%, which is significantly lower than traditional open repair.' },
        ],
      },
      {
        name: 'Laparoscopic Appendectomy',
        slug: 'laparoscopic-appendectomy',
        cost: '₹20,000 – ₹45,000',
        duration: '30–60 min',
        recovery: '2–4 days',
        description: 'Emergency or elective removal of the inflamed appendix through laparoscopy — faster recovery and less post-operative pain than open surgery.',
        indications: ['Acute appendicitis', 'Recurrent appendicitis', 'Appendiceal abscess (selected cases)', 'Incidental appendix removal'],
        benefits: ['Same-day or next-day discharge', 'Less post-op pain', '3 small incisions', 'Lower infection risk', 'Faster return to normal life'],
        preparation: ['Blood tests (CBC, CRP)', 'Ultrasound or CT scan', 'Emergency — no preparation needed'],
        steps: [
          { step: '01', title: 'Diagnosis', desc: 'Clinical + ultrasound/CT confirms appendicitis.' },
          { step: '02', title: 'Emergency Surgery', desc: 'Appendix removed laparoscopically under general anesthesia.' },
          { step: '03', title: 'Recovery', desc: 'Walking same evening; discharge in 1–2 days.' },
          { step: '04', title: 'Follow-up', desc: 'Review in 7 days; full activity in 2 weeks.' },
        ],
        faqs: [
          { question: 'Is appendicitis an emergency?', answer: 'Yes. Untreated appendicitis can rupture causing life-threatening peritonitis. Surgery is required urgently.' },
        ],
      },
    ],
  },

  // ── 2. Kidney & Ureteric Stone ────────────────────────────
  {
    name: 'Kidney & Ureteric Stone',
    slug: 'kidney-ureteric-stone',
    icon: '🫘',
    category: 'Urology',
    available: 'OPD & Emergency',
    description: 'Comprehensive management of kidney and ureteric stones — from medical dissolution to PCNL, RIRS, and ureteroscopy — by Dr. Sanjeev Kumar, Stone Specialist, Patna.',
    features: ['Renal Colic Management', 'PCNL', 'Ureteroscopy (URS)', 'RIRS (Flexible Ureteroscopy)', 'Medical Expulsive Therapy', 'Stone Prevention'],
    costEstimate: '₹15,000 – ₹1,20,000',
    recoveryTime: '1 – 5 days',
    order: 2,
    treatments: [
      {
        name: 'PCNL (Percutaneous Nephrolithotomy)',
        slug: 'pcnl-percutaneous-nephrolithotomy',
        cost: '₹60,000 – ₹1,20,000',
        duration: '60–180 min',
        recovery: '3–5 days',
        description: 'Minimally invasive surgical procedure to remove large kidney stones (>2 cm) through a small puncture in the back — avoiding open surgery.',
        indications: ['Large kidney stones >2 cm', 'Staghorn calculi', 'Stones not amenable to ESWL', 'Recurrent stones causing obstruction'],
        benefits: ['Keyhole procedure — no large cut', 'High stone clearance rate', 'Short hospital stay', 'Effective for complex stones', 'Single sitting procedure'],
        preparation: ['CT KUB / USG', 'Urine culture', 'Blood tests (CBC, RFT)', 'Urine infection treated before surgery'],
        steps: [
          { step: '01', title: 'CT Scan Analysis', desc: 'Stone size, position, and kidney anatomy assessed.' },
          { step: '02', title: 'PCNL Procedure', desc: 'Kidney accessed via a small back puncture; stone broken by laser/ultrasound and removed.' },
          { step: '03', title: 'Stent Placement', desc: 'A DJ stent may be placed to allow the kidney to heal.' },
          { step: '04', title: 'Follow-up', desc: 'Stent removal in 2–4 weeks; CT scan at 6 weeks to confirm stone clearance.' },
        ],
        faqs: [
          { question: 'What size stones need PCNL?', answer: 'Generally stones larger than 2 cm or stones that have failed other treatments (ESWL, ureteroscopy) require PCNL. Dr. Sanjeev Kumar will advise the best approach based on your CT scan.' },
        ],
      },
      {
        name: 'Ureteroscopy (URS) & Laser Lithotripsy',
        slug: 'ureteroscopy-laser-lithotripsy',
        cost: '₹25,000 – ₹60,000',
        duration: '30–90 min',
        recovery: '1–2 days',
        description: 'A thin ureteroscope is passed through the ureter to the stone; a laser breaks it into fragments that pass naturally. Gold standard for ureteric stones.',
        indications: ['Ureteric stones of any size', 'Lower ureteric stones', 'Stones causing kidney obstruction', 'Stones failed to pass with medication'],
        benefits: ['No external incision', 'Day procedure — home same day', 'Near 100% stone clearance', 'Safe in pregnancy', 'Suitable for all stone types'],
        preparation: ['Urine routine & culture', 'USG / CT KUB', 'Platelet count (stop aspirin 5 days before)'],
        steps: [
          { step: '01', title: 'Scope Insertion', desc: 'Ureteroscope passed through urethra → bladder → ureter to reach stone.' },
          { step: '02', title: 'Laser Lithotripsy', desc: 'Stone pulverized into dust using Holmium laser.' },
          { step: '03', title: 'Stone Retrieval', desc: 'Fragments removed with baskets; DJ stent placed.' },
          { step: '04', title: 'Follow-up', desc: 'Stent removed in 2–3 weeks; USG to confirm clearance.' },
        ],
        faqs: [
          { question: 'Is ureteroscopy painful?', answer: 'The procedure is performed under anesthesia so you will not feel any pain. After the procedure, mild discomfort from the stent is common and managed with painkillers.' },
        ],
      },
      {
        name: 'Renal Colic Management',
        slug: 'renal-colic-management',
        cost: '₹2,000 – ₹10,000',
        duration: '30–60 min',
        recovery: 'Immediate',
        description: 'Emergency management of acute kidney stone pain (renal colic) — IV fluids, pain relief, and early stone treatment planning.',
        indications: ['Sudden severe flank pain', 'Blood in urine (hematuria)', 'Nausea with severe back pain', 'Known stone with new pain episode'],
        benefits: ['Immediate pain relief', 'IV analgesia & hydration', 'Urgent stone imaging', 'Stone treatment plan same visit'],
        preparation: ['No preparation needed — walk in emergency'],
        steps: [
          { step: '01', title: 'Emergency Assessment', desc: 'Urine test, ultrasound/CT done immediately.' },
          { step: '02', title: 'Pain Relief', desc: 'IV NSAIDs and antispasmodics administered.' },
          { step: '03', title: 'Stone Localisation', desc: 'CT KUB confirms stone size and position.' },
          { step: '04', title: 'Treatment Decision', desc: 'Medical therapy or urgent surgery planned based on stone position and kidney function.' },
        ],
        faqs: [
          { question: 'Will kidney stone pain go away on its own?', answer: 'Small stones (<5 mm) often pass with hydration and pain medication. Larger stones (>7 mm) usually require intervention. Early assessment is critical to protect kidney function.' },
        ],
      },
    ],
  },

  // ── 3. Liver Disorders ────────────────────────────────────
  {
    name: 'Liver Disorders',
    slug: 'liver-disorders',
    icon: '🫀',
    category: 'Hepatology',
    available: 'OPD Hours',
    description: 'Surgical and medical management of liver cysts, abscesses, tumors, and portal hypertension by Dr. Sanjeev Kumar — Liver Specialist, Patna.',
    features: ['Liver Abscess', 'Liver Cysts', 'Hepatic Tumors', 'Portal Hypertension', 'Liver Trauma', 'Laparoscopic Liver Surgery'],
    costEstimate: '₹10,000 – ₹3,00,000',
    recoveryTime: '3 – 14 days',
    order: 3,
    treatments: [
      {
        name: 'Liver Abscess Drainage',
        slug: 'liver-abscess-drainage',
        cost: '₹15,000 – ₹60,000',
        duration: '30–60 min',
        recovery: '5–10 days',
        description: 'Minimally invasive percutaneous drainage or laparoscopic drainage of liver abscess — effective for amoebic and pyogenic liver abscesses.',
        indications: ['Amoebic liver abscess', 'Pyogenic liver abscess', 'High fever with right upper abdomen pain', 'Liver abscess on ultrasound'],
        benefits: ['Avoids open surgery', 'Rapid resolution of fever', 'Short hospital stay', 'Guided drainage for precise treatment'],
        preparation: ['Ultrasound/CT abdomen', 'Blood tests (LFT, CBC, serology)', 'Amoebic serology'],
        steps: [
          { step: '01', title: 'Imaging', desc: 'Ultrasound or CT confirms abscess size and position.' },
          { step: '02', title: 'Drainage', desc: 'Needle aspiration or drain placed under ultrasound guidance.' },
          { step: '03', title: 'Antibiotics', desc: 'Targeted antibiotic therapy initiated.' },
          { step: '04', title: 'Follow-up', desc: 'Repeat imaging at 1–2 weeks to confirm resolution.' },
        ],
        faqs: [
          { question: 'Is liver abscess dangerous?', answer: 'Untreated liver abscess can be life-threatening. With timely drainage and antibiotics, outcomes are excellent. Most patients recover fully within 2-3 weeks.' },
        ],
      },
    ],
  },

  // ── 4. Pancreas Disorders ────────────────────────────────
  {
    name: 'Pancreas Disorders',
    slug: 'pancreas-disorders',
    icon: '🧬',
    category: 'Gastro',
    available: 'OPD Hours',
    description: 'Expert management of pancreatitis, pancreatic cysts, and pseudocysts — medical and surgical treatment by Dr. Sanjeev Kumar, Pancreas Specialist, Patna.',
    features: ['Acute Pancreatitis', 'Chronic Pancreatitis', 'Pancreatic Pseudocyst', 'Pancreatic Abscess', 'Pancreatic Tumors', 'ERCP'],
    costEstimate: '₹20,000 – ₹2,00,000',
    recoveryTime: '7 – 21 days',
    order: 4,
    treatments: [
      {
        name: 'Acute Pancreatitis Management',
        slug: 'acute-pancreatitis-management',
        cost: '₹20,000 – ₹80,000',
        duration: 'ICU/Ward admission',
        recovery: '7–21 days',
        description: 'Intensive medical and surgical management of acute pancreatitis — including fluid resuscitation, pain control, nutritional support, and timely surgical intervention for complications.',
        indications: ['Severe upper abdominal pain radiating to back', 'Elevated lipase/amylase', 'Gallstone pancreatitis', 'Alcoholic pancreatitis', 'Pancreatic necrosis'],
        benefits: ['Expert ICU management', 'Early nutrition support', 'Minimally invasive drainage for collections', 'Gallstone removal to prevent recurrence'],
        preparation: ['Emergency admission', 'Blood tests — amylase, lipase, LFT, renal function', 'CT abdomen for severity assessment'],
        steps: [
          { step: '01', title: 'Severity Assessment', desc: 'CT severity index calculated; ICU or ward admission decided.' },
          { step: '02', title: 'Resuscitation', desc: 'IV fluids, pain relief, bowel rest, and oxygen as needed.' },
          { step: '03', title: 'Nutrition', desc: 'Early enteral nutrition via nasojejunal tube if required.' },
          { step: '04', title: 'Intervention', desc: 'Surgery or drainage for necrosis, abscess, or pseudocyst as needed.' },
        ],
        faqs: [
          { question: 'What causes pancreatitis?', answer: 'The most common causes are gallstones (blocking the pancreatic duct) and alcohol. Other causes include high triglycerides, medications, and trauma.' },
        ],
      },
      {
        name: 'Pancreatic Pseudocyst Drainage',
        slug: 'pancreatic-pseudocyst-drainage',
        cost: '₹25,000 – ₹80,000',
        duration: '60–120 min',
        recovery: '3–7 days',
        description: 'Laparoscopic or endoscopic drainage of pancreatic pseudocysts — a common complication of pancreatitis that causes persistent abdominal pain and bloating.',
        indications: ['Pseudocyst >6 cm or symptomatic', 'Pseudocyst with infection or bleeding', 'Failed conservative management', 'Persistent pain after pancreatitis'],
        benefits: ['Minimally invasive drainage', 'Avoids open surgery', 'High success rate', 'Short recovery'],
        preparation: ['CT abdomen / MRI MRCP', 'Serum amylase', 'Endoscopy (EUS) for endoscopic drainage option'],
        steps: [
          { step: '01', title: 'Imaging Assessment', desc: 'CT/MRI confirms cyst maturity (>6 weeks) and suitability for drainage.' },
          { step: '02', title: 'Drainage Procedure', desc: 'Laparoscopic cystogastrostomy or endoscopic ultrasound-guided drainage performed.' },
          { step: '03', title: 'Post-Procedure Care', desc: 'Low-fat diet; monitoring for recurrence.' },
          { step: '04', title: 'Follow-up', desc: 'CT at 6–8 weeks to confirm cyst resolution.' },
        ],
        faqs: [
          { question: 'Does a pseudocyst need surgery?', answer: 'Not always. Small pseudocysts often resolve on their own. Large symptomatic pseudocysts (>6 cm or causing pain/infection) require drainage, which is now done minimally invasively.' },
        ],
      },
    ],
  },

  // ── 5. Jaundice & Biliary Disorders ──────────────────────
  {
    name: 'Jaundice & Biliary Disorders',
    slug: 'jaundice-biliary-disorders',
    icon: '🩺',
    category: 'Biliary',
    available: 'OPD & Emergency',
    description: 'Expert evaluation and surgical treatment of obstructive jaundice, choledocholithiasis (CBD stones), biliary strictures, and cholangitis by Dr. Sanjeev Kumar.',
    features: ['Obstructive Jaundice', 'CBD Stones', 'Cholangitis', 'Biliary Stricture', 'ERCP', 'Laparoscopic CBD Exploration'],
    costEstimate: '₹20,000 – ₹1,50,000',
    recoveryTime: '3 – 10 days',
    order: 5,
    treatments: [
      {
        name: 'Obstructive Jaundice Treatment',
        slug: 'obstructive-jaundice-treatment',
        cost: '₹20,000 – ₹1,20,000',
        duration: 'Varies by cause',
        recovery: '3–10 days',
        description: 'Diagnosis and treatment of surgical jaundice caused by CBD stones, biliary strictures, or tumors — using ERCP, laparoscopy, or open surgery as appropriate.',
        indications: ['Yellow eyes/skin (jaundice)', 'Dark urine, pale stools', 'CBD stones on ultrasound/MRI', 'Elevated bilirubin and ALP', 'Fever with jaundice (cholangitis)'],
        benefits: ['Rapid bilirubin clearance', 'ERCP — non-surgical stone removal', 'Laparoscopic drainage options', 'Emergency decompression for cholangitis'],
        preparation: ['LFT, bilirubin levels', 'Ultrasound abdomen', 'MRI / MRCP', 'Blood coagulation (PT/INR)'],
        steps: [
          { step: '01', title: 'Diagnosis', desc: 'MRCP or CT identifies the level and cause of obstruction.' },
          { step: '02', title: 'ERCP / Surgery', desc: 'ERCP for stone removal; surgery for strictures or tumors.' },
          { step: '03', title: 'Cholecystectomy', desc: 'Gallbladder removed laparoscopically if gallstones are the cause.' },
          { step: '04', title: 'Follow-up', desc: 'LFT monitored weekly until normalized; CT/MRCP follow-up if tumor suspected.' },
        ],
        faqs: [
          { question: 'Is surgical jaundice dangerous?', answer: 'Obstructive jaundice is a surgical emergency in many cases. Delayed treatment can lead to liver failure, cholangitis (biliary sepsis), and kidney failure. Early expert intervention gives excellent outcomes.' },
        ],
      },
    ],
  },

  // ── 6. General & GI Surgery ──────────────────────────────
  {
    name: 'General & Gastrointestinal Surgery',
    slug: 'general-gi-surgery',
    icon: '🏥',
    category: 'General',
    available: 'OPD & Emergency',
    description: 'Comprehensive general and gastrointestinal surgical care including bowel surgery, fistula, fissure, piles, and abdominal surgeries by Dr. Sanjeev Kumar.',
    features: ['Piles / Haemorrhoids', 'Fistula-in-ano', 'Fissure', 'Bowel Surgery', 'Colorectal Surgery', 'Abdominal Mass Excision'],
    costEstimate: '₹10,000 – ₹1,50,000',
    recoveryTime: '1 – 14 days',
    order: 6,
    treatments: [
      {
        name: 'Haemorrhoids / Piles Surgery',
        slug: 'haemorrhoids-piles-surgery',
        cost: '₹15,000 – ₹40,000',
        duration: '30–60 min',
        recovery: '2–5 days',
        description: 'Surgical treatment of Grade III & IV piles using Stapled Haemorrhoidopexy (PPH) or conventional haemorrhoidectomy — providing permanent relief from bleeding and prolapse.',
        indications: ['Grade III & IV piles', 'Bleeding piles unresponsive to medication', 'Prolapsed piles', 'Thrombosed external haemorrhoids'],
        benefits: ['Permanent relief', 'Stapled PPH — painless procedure', 'Short hospital stay', 'Quick return to work'],
        preparation: ['Colonoscopy if age >45 or bleeding unconfirmed', 'Blood tests', 'Bowel prep as advised'],
        steps: [
          { step: '01', title: 'Evaluation', desc: 'Proctoscopy / colonoscopy to confirm grade and rule out other pathology.' },
          { step: '02', title: 'Surgery', desc: 'Stapled PPH or haemorrhoidectomy under spinal/general anesthesia.' },
          { step: '03', title: 'Discharge', desc: 'Next-day discharge in most cases.' },
          { step: '04', title: 'Follow-up', desc: 'Review at 1 week; high fibre diet advised permanently.' },
        ],
        faqs: [
          { question: 'Will piles come back after surgery?', answer: 'Surgical treatment of piles has a very low recurrence rate (<5%) especially with Stapled PPH. High fibre diet and avoiding straining are key to preventing recurrence.' },
        ],
      },
      {
        name: 'Fistula-in-Ano Surgery',
        slug: 'fistula-in-ano-surgery',
        cost: '₹20,000 – ₹50,000',
        duration: '30–90 min',
        recovery: '2–6 weeks',
        description: 'Surgical management of anal fistula using fistulotomy, LIFT procedure, or advancement flap — to close the abnormal tract while preserving continence.',
        indications: ['Perianal fistula (constant discharge)', 'Recurrent perianal abscess', 'High or complex fistulas', 'Post-abscess fistula'],
        benefits: ['Permanent cure', 'Sphincter-preserving techniques available', 'Expert management of complex fistulas'],
        preparation: ['MRI pelvis to map fistula tract', 'Blood tests', 'Stool culture if infected'],
        steps: [
          { step: '01', title: 'MRI Assessment', desc: 'MRI pelvis maps the fistula tract precisely.' },
          { step: '02', title: 'Surgery', desc: 'Appropriate technique selected — fistulotomy, LIFT, or flap.' },
          { step: '03', title: 'Wound Care', desc: 'Sitz baths and wound dressings daily.' },
          { step: '04', title: 'Follow-up', desc: 'Weekly review for 6 weeks; healing assessed.' },
        ],
        faqs: [
          { question: 'Can fistula heal without surgery?', answer: 'Anal fistula almost never heals without surgery. Delaying treatment leads to recurrent abscesses and more complex tracts. Early surgical treatment gives the best outcome.' },
        ],
      },
    ],
  },
]

export default laproStoneSpecialities
