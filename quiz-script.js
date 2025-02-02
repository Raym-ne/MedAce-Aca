console.log("script.js loaded");

const quizData = [
    {
        question: '1. A 45-year-old woman presents with polyuria, polydipsia, and unexplained weight loss over the past three months. She has no family history of diabetes. On examination, her BMI is 22 kg/m². Lab results show:\n • Random plasma glucose:240 mg/dL\n• HbA1c: 8.5%\n• Anti-GAD antibodies: Positive\nWhat is the most likely diagnosis?',
        options: ["A) Type 1 diabetes mellitus", "B) Type 2 diabetes mellitus", "C) Maturity-onset diabetes of the young (MODY)", "D) Gestational diabetes mellitus", "E) Latent autoimmune diabetes in adults (LADA)"],
        correct: 4,
        explanations: {
            0: "Correct answer (E): LADA is a slowly progressive form of autoimmune diabetes seen in adults who initially do not require insulin. Features include a normal BMI, positive anti-GAD antibodies, and absence of significant family history of T2DM.",
            1: "• A (Type 1 DM): Unlikely, as T1DM typically presents in childhood/adolescence with rapid onset and severe insulin deficiency.",
            2: "• B (Type 2 DM): The patient’s normal BMI and presence of anti-GAD antibodies make T2DM unlikely.",
            3: "• C (MODY): MODY is a monogenic diabetes with an autosomal dominant inheritance pattern. It does not involve autoimmunity.",
            4: "• D (Gestational DM): Gestational DM is limited to pregnancy. This patient is not pregnant."
        }
    },
    // Add more questions here...
    {
        question: "2. A 62-year-old man presents for routine evaluation. His BMI is 32 kg/m², and he has a family history of diabetes. Lab results are:\n• Fasting glucose: 128 mg/dL\n• HbA1c: 6.8%\n• 2-hour glucose during OGTT: 210 mg/dL\nWhat is the most appropriate diagnosis?",
        options: ["A) Normal glucose tolerance", "B) Impaired fasting glucose (IFG)", "C) Impaired glucose tolerance (IGT)", "D) Type 2 diabetes mellitus", "E) Prediabetes"],
        correct: 3,
        explanations: {
            0: "Explanation: Correct answer (D): This patient meets the ADA diagnostic criteria for diabetes: FPG ≥ 126 mg/dL, HbA1c ≥ 6.5%, and 2-hour OGTT glucose ≥ 200 mg/dL.",
            1: "• A (Normal glucose tolerance): FPG, HbA1c, and OGTT values exceed normal thresholds.",
            2: "• B (Impaired fasting glucose): IFG is defined as FPG 100–125 mg/dL, which does not fit this case.",
            3: "• C (Impaired glucose tolerance): IGT is defined as 2-hour OGTT glucose 140–199 mg/dL. This patient’s OGTT glucose is >200 mg/dL.",
            4: "• E (Prediabetes): Prediabetes criteria are FPG 100–125 mg/dL, HbA1c 5.7–6.4%, or OGTT 140–199 mg/dL. This patient exceeds these thresholds."
        }
    },
    {
        question: "3. A 28-year-old woman at 28 weeks of gestation undergoes a 75 g OGTT. Her results are:\n• Fasting glucose: 100 mg/dL\n• 1-hour glucose: 190 mg/dL\n• 2-hour glucose: 165 mg/dL\nWhat is the most appropriate diagnosis?",
        options: ["A) Type 1 diabetes mellitus", "B) Type 2 diabetes mellitus", "C) Gestational diabetes mellitus (GDM)", "D) Impaired glucose tolerance", "E) Normal glucose tolerance"],
        correct: 2,
        explanations: {
            0: "Explanation: Correct answer (C): GDM is diagnosed when any of the following thresholds are met during a 75 g OGTT: fasting glucose ≥ 92 mg/dL, 1-hour glucose ≥ 180 mg/dL, or 2-hour glucose ≥ 153 mg/dL. This patient meets all criteria.",
            1: "• A (Type 1 DM): T1DM is a chronic condition unrelated to pregnancy.",
            2: "• B (Type 2 DM): GDM is defined as glucose intolerance first identified during pregnancy. T2DM is ruled out unless confirmed postpartum.",
            3: "• D (Impaired glucose tolerance): IGT applies to non-pregnant individuals.",
            4: "• E (Normal glucose tolerance): The patient’s glucose values exceed normal thresholds for pregnancy."
        }
    },
    {
        question: "4. A 55-year-old man with poorly controlled diabetes presents with nausea, abdominal pain, and confusion. His labs reveal:\n• Glucose: 320 mg/dL\n• Arterial pH: 7.22\n• Serum bicarbonate: 10 mEq/L\n• Serum ketones: Positive\nWhich of the following is the best next step in management?",
        options: ["A) Subcutaneous insulin and oral fluids", "B) IV fluids, IV insulin, and potassium supplementation", "C) Sodium bicarbonate infusion", "D) Immediate dialysis", "E) Glucagon injection"],
        correct: 1,
        explanations: {
            0: "Explanation: Correct answer (B): The patient has diabetic ketoacidosis (DKA), characterized by hyperglycemia, metabolic acidosis, and ketosis. Management includes IV fluids for dehydration, IV insulin to stop ketogenesis, and potassium replacement as insulin shifts potassium intracellularly.",
            1: "• A (Subcutaneous insulin and oral fluids): Insufficient for DKA; IV therapy is required.",
            2: "• C (Sodium bicarbonate infusion): Reserved for severe acidosis (pH < 6.9), as it can worsen intracellular acidosis.",
            3: "• D (Immediate dialysis): Not indicated unless severe renal failure is present.",
            4: "• E (Glucagon injection): Used for hypoglycemia, not DKA."
        }
    },
    {
        question: "5. A 66-year-old man with T2DM presents with altered mental status. His labs show:\n• Glucose: 850 mg/dL\n• Serum osmolality: 325 mOsm/kg\n• Arterial pH: 7.38\n• Ketones: Negative\nWhat is the most likely diagnosis?",
        options: ["A) Diabetic ketoacidosis (DKA)", "B) Hyperosmolar hyperglycemic state (HHS)", "C) Hypoglycemia", "D) Lactic acidosis", "E) Alcoholic ketoacidosis"],
        correct: 1,
        explanations: {
            0: "Explanation: Correct answer (B): HHS is characterized by severe hyperglycemia (>600 mg/dL), hyperosmolarity (>320 mOsm/kg), and absence of significant acidosis or ketosis. It typically occurs in elderly patients with T2DM.",
            1: "• A (DKA): DKA involves acidosis (pH < 7.3) and ketones, absent here.",
            2: "• C (Hypoglycemia): Blood glucose <70 mg/dL is required for hypoglycemia.",
            3: "• D (Lactic acidosis): Associated with elevated lactate and metabolic acidosis, not hyperosmolarity.",
            4: "• E (Alcoholic ketoacidosis): Involves ketosis and metabolic acidosis in the context of alcohol use, not hyperosmolarity."
        }
    },
    {
        question: "6. A 39-year-old man with poorly controlled T2DM presents with persistent numbness and burning pain in his feet, worse at night. Physical examination shows decreased sensation to light touch and vibration over both feet. Which of the following is the best initial treatment for his symptoms?",
        options: ["A) Insulin therapy to optimize glycemic control", "B) Gabapentin", "C) Tricyclic antidepressants (e.g., amitriptyline)", "D) Capsaicin cream", "E) NSAIDs"],
        correct: 1,
        explanations: {
            0: "Explanation: Correct answer (B): Diabetic peripheral neuropathy causing burning pain and sensory loss is best managed initially with medications such as gabapentin, which targets neuropathic pain. Other first-line options include pregabalin and duloxetine.",
            1: "• A (Insulin therapy): While glycemic control is important to prevent progression, it does not relieve established neuropathic pain.",
            2: "• C (Tricyclic antidepressants): Effective but less commonly used due to anticholinergic side effects and higher risk of overdose toxicity.",
            3: "• D (Capsaicin cream): Can be used as adjunct therapy but is not first-line due to inconsistent results and local irritation.",
            4: "• E (NSAIDs): Ineffective for neuropathic pain, as they primarily target inflammatory processes."
        }
    },
    {
        question: "7. A 55-year-old man with a 10-year history of T2DM is found to have microalbuminuria (albumin-to-creatinine ratio: 50 mg/g). His blood pressure is 140/90 mmHg. Which of the following is the most appropriate medication to initiate?",
        options: ["A) Amlodipine", "B) Lisinopril", "C) Furosemide", "D) Metoprolol", "E) Spironolactone"],
        correct: 1,
        explanations: {
            0: "Explanation: Correct answer (B): ACE inhibitors like lisinopril reduce intraglomerular pressure, slow progression of diabetic nephropathy, and lower blood pressure. They are the first-line treatment for patients with diabetes and microalbuminuria.",
            1: "• A (Amlodipine): A calcium channel blocker reduces BP but does not provide renal protection in diabetic nephropathy.",
            2: "• C (Furosemide): Diuretics are not first-line for microalbuminuria; they are used for volume overload in advanced CKD.",
            3: "• D (Metoprolol): Beta-blockers are less effective in slowing nephropathy progression.",
            4: "• E (Spironolactone): Useful for resistant hypertension but not first-line for microalbuminuria."
        }
    },
    {
        question: "8. A 24-year-old woman is diagnosed with T1DM. Which of the following is the most appropriate insulin regimen to mimic normal physiological insulin secretion?",
        options: ["A) Twice-daily pre-mixed insulin", "B) Long-acting insulin alone", "C) Basal-bolus insulin regimen", "D) Insulin pump delivering basal insulin only", "E) Sliding-scale insulin therapy"],
        correct: 2,
        explanations: {
            0: "Explanation: Correct answer (C): A basal-bolus regimen mimics physiological insulin secretion by providing basal insulin (e.g., glargine) for background needs and rapid-acting insulin (e.g., lispro) for meal coverage.",
            1: "• A (Twice-daily pre-mixed insulin): Simpler but less precise, leading to suboptimal glycemic control.",
            2: "• B (Long-acting insulin alone): Does not address postprandial glucose excursions.",
            3: "• D (Insulin pump delivering basal insulin only): Insulin pumps should deliver both basal and bolus insulin.",
            4: "• E (Sliding-scale insulin therapy): Outdated approach that responds to hyperglycemia but does not prevent it."
        }
    },
    {
        question: "9. A 50-year-old woman with T2DM complains of frequent hypoglycemic episodes, especially at night. Her current medications include glimepiride and metformin. Which of the following is the best next step?",
        options: ["A) Add insulin glargine at bedtime", "B) Discontinue glimepiride and start a DPP-4 inhibitor", "C) Reduce the dose of metformin", "D) Advise the patient to eat a bedtime snack", "E) Switch metformin to a TZD (e.g., pioglitazone)"],
        correct: 1,
        explanations: {
            0: "Explanation: Correct answer (B): Glimepiride, a sulfonylurea, increases insulin secretion and is associated with a high risk of hypoglycemia. Replacing it with a DPP-4 inhibitor (e.g., sitagliptin) reduces this risk.",
            1: "• A (Add insulin glargine): Adding basal insulin would increase hypoglycemia risk, especially when combined with a sulfonylurea.",
            2: "• C (Reduce the dose of metformin): Metformin does not cause hypoglycemia, so dose reduction is unnecessary.",
            3: "• D (Advise a bedtime snack): May help reduce nocturnal hypoglycemia but does not address the underlying issue.",
            4: "• E (Switch metformin to a TZD): TZDs are associated with weight gain and fluid retention; metformin should be continued as first-line therapy."
        }
    },
    {
        question: "10. A 38-year-old woman with uncontrolled T2DM presents with abdominal pain, nausea, and vomiting. Her lab results are as follows:\n• Blood glucose: 450 mg/dL\n• Serum bicarbonate: 18 mEq/L\n• Anion gap: 18\n• Serum ketones: Trace\nWhat is the most likely diagnosis?",
        options: ["A) Diabetic ketoacidosis (DKA)", "B) Hyperosmolar hyperglycemic state (HHS)", "C) Euglycemic ketoacidosis", "D) Mixed acid-base disorder", "E) Alcoholic ketoacidosis"],
        correct: 0,
        explanations: {
            0: "Explanation: Correct answer (A): DKA is characterized by hyperglycemia, an elevated anion gap, and metabolic acidosis. This patient’s trace ketones and mild acidosis fit DKA.",
            1: "• B (HHS): HHS is less likely due to the presence of acidosis and ketones; HHS usually presents without significant acidosis.",
            2: "• C (Euglycemic ketoacidosis): Typically seen in patients on SGLT2 inhibitors with normal or mildly elevated glucose levels.",
            3: "• D (Mixed acid-base disorder): Not suggested by the clinical scenario or lab values.",
            4: "• E (Alcoholic ketoacidosis): Associated with a history of alcohol use, and typically glucose levels are normal or low."
        }
    },
    {
        question: "11. A 6-year-old child with Type 1 Diabetes is admitted with diabetic ketoacidosis (DKA). His labs show a blood glucose of 700 mg/dL, pH 7.05, bicarbonate of 6 mEq/L, and positive ketones. Which of the following would be the first step in management?",
        options: ["A) Start insulin infusion immediately", "B) Administer 20 mL/kg normal saline bolus", "C) Administer potassium supplements", "D) Administer bicarbonate IV", "E) Start an oral glucose solution"],
        correct: 1,
        explanations: {
            0: "Explanation: The first priority in managing DKA is fluid resuscitation. A normal saline bolus (20 mL/kg) is given initially to restore circulation and correct dehydration.",
            1: "• A) Insulin is typically started after fluid resuscitation, as rapid insulin administration before hydration can lead to rapid shifts in potassium, causing hypokalemia.",
            2: "• C) Potassium should only be administered after the initial fluids and insulin are started because potassium levels must be monitored carefully.",
            3: "• D) Bicarbonate IV is not routinely used in DKA unless the pH is extremely low (<6.9).",
            4: "• E) Oral glucose is not appropriate because the patient is in DKA with severe hyperglycemia and ketosis."
        }
    },
    {
        question: "12. A 10-year-old child with Type 1 Diabetes is receiving insulin therapy but presents with recurrent hypoglycemia. What is the most likely cause of this?",
        options: ["A) Insulin resistance", "B) Too much insulin", "C) Insulin overdose due to stress", "D) Increased carbohydrate intake", "E) Diabetic nephropathy"],
        correct: 1,
        explanations: {
            0: "Explanation: Recurrent hypoglycemia in a patient with Type 1 Diabetes is most often caused by excess insulin, either from overdosing or incorrect insulin dose adjustments.",
            1: "• A) Insulin resistance usually leads to poor control and hyperglycemia, not hypoglycemia.",
            2: "• C) Insulin overdose due to stress would cause hyperglycemia, not hypoglycemia.",
            3: "• D) Increased carbohydrate intake would typically prevent hypoglycemia, not cause it.",
            4: "• E) Diabetic nephropathy causes kidney problems, but it does not lead to recurrent hypoglycemia."
        }
    },
    {
        question: "13. A 9-year-old boy is diagnosed with Type 1 Diabetes and is instructed to monitor his blood glucose at home. Which of the following should be emphasized in teaching the child about blood glucose monitoring?",
        options: ["A) Blood glucose should be checked only when the child feels symptomatic", "B) Blood glucose should be monitored at least four times daily", "C) Fingersticks should be avoided to reduce discomfort", "D) Blood glucose monitoring is unnecessary once HbA1c is controlled", "E) A blood glucose level of 200 mg/dL or higher should always be corrected immediately"],
        correct: 1,
        explanations: {
            0: "Explanation: Frequent blood glucose monitoring (at least four times daily) is crucial for managing Type 1 Diabetes and adjusting insulin doses.",
            1: "• A) Monitoring only when symptomatic could lead to poor glucose control and undiagnosed hypoglycemia or hyperglycemia.",
            2: "• C) Fingersticks are necessary for accurate glucose measurement, and proper techniques can minimize discomfort.",
            3: "• D) HbA1c control is important, but daily blood glucose monitoring is still necessary to adjust insulin therapy and avoid complications.",
            4: "• E) A blood glucose of 200 mg/dL should be corrected, but it’s essential to consider the patient’s symptoms, activity level, and insulin regimen rather than acting immediately without context."
        }
    },
    {
        question: "14. A 12-year-old child with Type 1 Diabetes is found to have elevated blood glucose levels and ketones in the urine after presenting with vomiting, abdominal pain, and fruity-smelling breath. His blood glucose is 650 mg/dL, and his pH is 7.1. What is the most likely diagnosis, and what is the initial management step?",
        options: ["A) Diabetic Ketoacidosis (DKA); initiate insulin infusion", "B) Diabetic Ketoacidosis (DKA); administer normal saline bolus", "C) Hyperosmolar Hyperglycemic State (HHS); administer insulin infusion", "D) Diabetic Ketoacidosis (DKA); start oral rehydration", "E) Non-Diabetic Ketoacidosis; start intravenous fluids"],
        correct: 1,
        explanations: {
            0: "Explanation: The clinical features (vomiting, abdominal pain, fruity breath), hyperglycemia (650 mg/dL), and ketonuria are strongly suggestive of Diabetic Ketoacidosis (DKA). The first step in management is to start fluid resuscitation with normal saline (0.9% NaCl) to correct dehydration and improve perfusion.",
            1: "• A) Insulin infusion is started after the initial fluid bolus. Giving insulin without fluid resuscitation could lead to electrolyte imbalances and rapid shifts in potassium, causing severe complications.",
            2: "• C) HHS is unlikely in this child due to the presence of ketonuria and the acidosis seen on blood gas. It is more common in Type 2 Diabetes.",
            3: "• D) Oral rehydration is inappropriate because the child is in DKA and is likely to be vomiting and unable to take fluids orally.",
            4: "• E) Non-Diabetic Ketoacidosis is extremely rare and would not present with such a high blood glucose level."
        }
    },
    {
        question: "15. A 15-year-old girl with Type 1 Diabetes is admitted with Diabetic Ketoacidosis (DKA). Her labs show a blood glucose level of 700 mg/dL, pH of 7.0, bicarbonate of 8 mEq/L, and ketonuria. She is initially given a normal saline bolus. Which of the following is the most appropriate next step in management?",
        options: ["A) Start intravenous insulin infusion at 0.1 units/kg/h", "B) Administer 50% dextrose solution", "C) Administer bicarbonate IV to correct acidosis", "D) Increase the saline infusion rate to 1.5 times maintenance", "E) Administer potassium IV"],
        correct: 0,
        explanations: {
            0: "Explanation: Insulin infusion (at a rate of 0.1 units/kg/h) is the next step in treating DKA after fluid resuscitation. This will help to reduce blood glucose levels and correct ketosis. Insulin helps shift glucose into cells and decreases ketone production.",
            1: "• B) 50% dextrose is not indicated in the acute treatment phase of DKA unless the glucose levels drop to dangerously low levels (<200 mg/dL).",
            2: "• C) Bicarbonate IV is not recommended for DKA unless the pH is extremely low (<6.9), as it can cause paradoxical worsening of acidosis.",
            3: "• D) Increasing saline infusion rate may be necessary later for maintenance but is not the immediate next step.",
            4: "• E) Potassium supplementation is usually required once insulin therapy is started, but potassium levels should be monitored first before giving potassium."
        }
    },
    {
        question: "16. A 10-year-old boy with Type 1 Diabetes is admitted with Diabetic Ketoacidosis (DKA). His initial laboratory findings show a blood glucose of 800 mg/dL, pH of 7.1, bicarbonate of 12 mEq/L, and ketones in the urine. The child’s serum potassium level is 5.0 mEq/L. What is the most appropriate next step?",
        options: ["A) Administer 20 mEq of potassium intravenously", "B) Start insulin infusion without potassium supplementation", "C) Administer potassium supplementation as insulin is started", "D) Administer bicarbonate to correct metabolic acidosis", "E) Recheck potassium levels in 1 hour"],
        correct: 2,
        explanations: {
            0: "Explanation: In DKA, serum potassium levels can be initially normal or high. However, once insulin is administered, potassium shifts into cells, often leading to hypokalemia. Therefore, potassium supplementation should be started when insulin is administered to prevent hypokalemia.",
            1: "• A) 20 mEq of potassium is not immediately needed as the potassium level is normal (5.0 mEq/L).",
            2: "• B) Starting insulin without potassium supplementation is not safe, as it can cause a rapid decrease in potassium levels.",
            3: "• D) Bicarbonate is rarely used for acidosis in DKA unless the pH is <6.9.",
            4: "• E) Rechecking potassium levels is important but not sufficient without supplementation once insulin therapy is started."
        }
    },
    {
        question: "17. A 14-year-old girl with Type 1 Diabetes is brought to the emergency department with diabetic ketoacidosis (DKA). The child has been vomiting for the past 6 hours and is unable to tolerate fluids. Her vital signs are BP 90/60 mmHg, pulse 120 beats per minute, and she appears dehydrated. Her glucose level is 700 mg/dL, pH 7.05, bicarbonate 8 mEq/L, and serum ketones are positive. What is the first step in management?",
        options: ["A) Administer 1L of normal saline over the next 2 hours", "B) Start insulin infusion at 0.1 units/kg/h", "C) Administer potassium supplements", "D) Begin oral hydration with a glucose solution", "E) Administer sodium bicarbonate IV"],
        correct: 0,
        explanations: {
            0: "Explanation: Fluid resuscitation with normal saline (0.9% NaCl) is the first priority in DKA to correct dehydration and improve circulatory volume. The typical initial bolus is 1L over the first 1-2 hours.",
            1: "• B) Insulin infusion is started after the initial fluid resuscitation to avoid complications like hypokalemia and rapid shifts in fluid.",
            2: "• C) Potassium supplements are administered after insulin therapy has started and when potassium levels drop.",
            3: "• D) Oral hydration is not appropriate in a child who is vomiting and unable to tolerate fluids.",
            4: "• E) Sodium bicarbonate is not routinely given unless the pH is extremely low (<6.9)."
        }
    },
    {
        question: "18. A 13-year-old boy presents to the emergency department with a 24-hour history of polyuria, polydipsia, nausea, vomiting, and abdominal pain. His blood glucose is 850 mg/dL, and he is in respiratory distress with Kussmaul breathing. His bicarbonate is 10 mEq/L, and his pH is 7.0. Which of the following is the most appropriate next step in his management?",
        options: ["A) Start insulin infusion at 0.1 units/kg/h after a 20 mL/kg normal saline bolus", "B) Administer potassium supplementation", "C) Begin intravenous glucose", "D) Administer bicarbonate IV", "E) Increase fluid intake with oral glucose solution"],
        correct: 0,
        explanations: {
            0: "Explanation: The child presents with diabetic ketoacidosis (DKA), as evidenced by the high glucose, low pH, low bicarbonate, and Kussmaul breathing (compensatory hyperventilation). The immediate next step is fluid resuscitation with a normal saline bolus (20 mL/kg) followed by insulin infusion at 0.1 units/kg/h.",
            1: "• B) Potassium supplementation is needed after starting insulin but not immediately.",
            2: "• C) Intravenous glucose is not indicated in DKA until the blood glucose falls below 200 mg/dL.",
            3: "• D) Bicarbonate IV is not used unless the pH is extremely low (<6.9).",
            4: "• E) Oral glucose solution is not appropriate as the child is vomiting and unable to take oral fluids."
        }
    },
    {
        question: "19. A 16-year-old girl with Type 1 Diabetes presents with severe nausea, vomiting, and abdominal pain. Her blood glucose level is 700 mg/dL, and she is in respiratory distress with a fruity odor to her breath. Laboratory results show a bicarbonate of 6 mEq/L and a pH of 7.1. What is the most appropriate next step in her management?",
        options: ["A) Start insulin infusion at 0.1 units/kg/h", "B) Administer 500 mL of normal saline over the next hour", "C) Administer intravenous potassium supplementation", "D) Start bicarbonate IV for acidosis", "E) Provide a glucose solution to correct dehydration"],
        correct: 1,
        explanations: {
            0: "Explanation: This patient is presenting with diabetic ketoacidosis (DKA), as indicated by hyperglycemia (700 mg/dL), acidosis (pH of 7.1, bicarbonate 6 mEq/L), nausea/vomiting, and Kussmaul breathing (due to metabolic acidosis). Fluid resuscitation is the most immediate priority to address dehydration and hypovolemia. 500 mL of normal saline should be given over the first hour.",
            1: "• A) Start insulin infusion is critical but should only be done after an initial fluid bolus to avoid hypokalemia and rapid changes in blood chemistry.",
            2: "• C) Potassium supplementation may be necessary later but not immediately, as potassium levels should be monitored before administration.",
            3: "• D) Bicarbonate IV is not recommended unless the pH is <6.9, and this patient’s acidosis is moderate (pH 7.1).",
            4: "• E) Glucose solution is contraindicated at this stage as the patient is already hyperglycemic."
        }
    },
    {
        question: "20. A 13-year-old boy with Type 1 Diabetes presents to the emergency department with nausea, vomiting, abdominal pain, and confusion. He has been feeling very thirsty and urinating frequently for the past 2 days. His blood glucose is 950 mg/dL, and his pH is 7.05. Which of the following is the most likely diagnosis?",
        options: ["A) Diabetic Ketoacidosis (DKA)", "B) Hyperosmolar Hyperglycemic State (HHS)", "C) Hyperglycemic Hyperosmolar State (HHS) with mild acidosis", "D) Diabetic Hypoglycemia", "E) Diabetic Hyperosmolar Syndrome"],
        correct: 0,
        explanations: {
            0: "Explanation: The patient’s symptoms of nausea, vomiting, abdominal pain, and confusion in the setting of marked hyperglycemia (950 mg/dL) and acidosis (pH 7.05) strongly suggest DKA. Additional typical findings would include fruity breath (due to acetone) and ketonuria.",
            1: "• B) HHS typically presents with severe hyperglycemia but without significant acidosis and is more common in older patients with Type 2 Diabetes.",
            2: "• C) Hyperosmolar Hyperglycemic State (HHS) with mild acidosis is unlikely here, as the pH in HHS is typically normal or only mildly decreased.",
            3: "• D) Diabetic Hypoglycemia would present with symptoms of confusion, shaking, and sweating, but not nausea, vomiting, abdominal pain, or high glucose.",
            4: "• E) Diabetic Hyperosmolar Syndrome is not a recognized entity; HHS is the correct term for hyperglycemia without significant acidosis."
        }
    },
    {
        question: "21. A 10-year-old child with Type 1 Diabetes presents with a 24-hour history of polyuria, polydipsia, and general malaise. On examination, the child is dehydrated, has a fruity odor to his breath, and is breathing rapidly (Kussmaul breathing). Laboratory results show a blood glucose of 750 mg/dL, pH 7.1, and bicarbonate of 12 mEq/L. Which of the following is the most likely diagnosis?",
        options: ["A) Diabetic Ketoacidosis (DKA)", "B) Hyperosmolar Hyperglycemic State (HHS)", "C) Diabetic Hypoglycemia", "D) Diabetic Insipidus", "E) Viral Gastroenteritis with Hyperglycemia"],
        correct: 0,
        explanations: {
            0: "Explanation: The patient’s Kussmaul breathing, fruity breath, dehydration, and hyperglycemia (750 mg/dL) with acidosis (pH 7.1, bicarbonate of 12) are classic signs of DKA. Kussmaul breathing occurs as a compensatory mechanism for metabolic acidosis.",
            1: "• B) HHS is unlikely because it does not present with significant acidosis (pH <7.3) or ketonuria, and HHS is more commonly seen in adults.",
            2: "• C) Diabetic Hypoglycemia would present with low blood glucose and symptoms such as shaking and sweating, not vomiting and fruity breath.",
            3: "• D) Diabetic Insipidus typically presents with polyuria and polydipsia but does not cause acidosis or a fruity breath odor.",
            4: "• E) Viral Gastroenteritis could cause vomiting and dehydration but would not lead to the extreme hyperglycemia and acidosis seen in this case."
        }
    },
    {
        question: "22. A 14-year-old girl with Type 1 Diabetes is brought to the hospital by her parents for vomiting, weakness, and confusion. She has been drinking excessive amounts of water and urinating frequently over the past few days. Upon examination, she has deep, labored breathing, hypotension, and acetone breath. Her lab results show a blood glucose level of 900 mg/dL, pH 7.1, and a positive urine ketone test. What is the most likely diagnosis?",
        options: ["A) Diabetic Ketoacidosis (DKA)", "B) Hyperosmolar Hyperglycemic State (HHS)", "C) Diabetic Hypoglycemia", "D) Hyperglycemic Hyperosmolar State (HHS) with acidosis", "E) Stress-induced hyperglycemia"],
        correct: 0,
        explanations: {
            0: "Explanation: The deep, labored breathing (Kussmaul breathing), acetone breath, vomiting, and hyperglycemia (900 mg/dL) along with ketonuria strongly point to DKA. DKA is characterized by metabolic acidosis, ketosis, and hyperglycemia.",
            1: "• B) HHS would not show significant acidosis or ketonuria, which are key findings in this case.",
            2: "• C) Diabetic Hypoglycemia is characterized by low blood glucose and symptoms such as confusion and shakiness, not vomiting and acetone breath.",
            3: "• D) Hyperglycemic Hyperosmolar State (HHS) with acidosis is uncommon in children and does not typically present with acidosis.",
            4: "• E) Stress-induced hyperglycemia is a possible cause of hyperglycemia but does not cause acidosis or ketosis."
        }
    },
    {
        question: "23. A 12-year-old child with Type 1 Diabetes presents with confusion, abdominal pain, vomiting, and a fruity odor to her breath. Her blood glucose is 750 mg/dL, pH 7.15, bicarbonate of 15 mEq/L, and serum ketones are positive. What is the first step in her management?",
        options: ["A) Start insulin infusion at 0.1 units/kg/h", "B) Administer 20 mL/kg normal saline bolus", "C) Administer intravenous potassium supplements", "D) Start oral rehydration", "E) Administer bicarbonate IV for acidosis"],
        correct: 1,
        explanations: {
            0: "Explanation: Fluid resuscitation with a 20 mL/kg normal saline bolus is the first step in DKA management. This helps to correct dehydration and improve circulation before starting insulin therapy.",
            1: "• A) Insulin infusion is critical but should be started after fluid resuscitation to avoid rapid shifts in electrolytes.",
            2: "• C) Potassium supplementation is given after starting insulin therapy, as insulin can cause potassium to shift into cells.",
            3: "• D) Oral rehydration is not appropriate as the child is vomiting and unable to tolerate oral fluids.",
            4: "• E) Bicarbonate IV is not routinely used unless the pH is <6.9."
        }
    },
    {
        question: "24. A 15-year-old boy with Type 1 Diabetes presents with vomiting, abdominal pain, and confusion. His lab results show a blood glucose of 800 mg/dL, pH of 7.05, bicarbonate of 12 mEq/L, and ketones in the urine. His serum potassium level is 3.8 mEq/L. What is the next best step in management?",
        options: ["A) Administer 20 mEq of potassium intravenously", "B) Start insulin infusion at 0.1 units/kg/h", "C) Administer intravenous fluids without potassium supplementation", "D) Start intravenous bicarbonate to correct acidosis", "E) Start potassium infusion after rechecking potassium levels in 2 hours"],
        correct: 1,
        explanations: {
            0: "Explanation: In this patient with DKA, the initial management involves starting insulin infusion at 0.1 units/kg/h to lower the blood glucose and begin correcting ketosis. Insulin should be started after a fluid bolus to avoid electrolyte imbalances.",
            1: "• A) Administering 20 mEq of potassium intravenously is unnecessary at this stage. The serum potassium level is 3.8 mEq/L, which is within the normal range (3.5–5.0 mEq/L), and potassium supplementation is generally started after insulin therapy is initiated.",
            2: "• C) Administering intravenous fluids without potassium supplementation would be appropriate initially (after insulin), but this patient already has a potassium level in the normal range, and insulin should be started promptly.",
            3: "• D) Starting intravenous bicarbonate is not recommended unless the pH is <6.9. Here, the pH is low (7.05), but not critically low to warrant bicarbonate use.",
            4: "• E) Rechecking potassium in 2 hours is not appropriate before starting insulin. Potassium levels should be checked regularly after insulin is started, but initial therapy should not be delayed."
        }
    },
    {
        question: "25. A 14-year-old girl with Type 1 Diabetes presents with polyuria, polydipsia, and vomiting. She is found to be dehydrated and her blood glucose is 850 mg/dL. Her laboratory results show a pH of 7.0, bicarbonate of 6 mEq/L, and serum ketones are positive. What is the most appropriate treatment for this patient at this time?",
        options: ["A) Start intravenous insulin after a normal saline bolus", "B) Administer oral rehydration fluids with glucose", "C) Administer potassium supplementation before starting insulin", "D) Start insulin infusion at 0.2 units/kg/h", "E) Start intravenous bicarbonate"],
        correct: 0,
        explanations: {
            0: "Explanation: In this patient with DKA, the first step in management is fluid resuscitation (normal saline bolus) to address dehydration and correct electrolyte imbalances. Insulin infusion is initiated after the bolus to correct hyperglycemia and ketosis.",
            1: "• B) Oral rehydration fluids are not appropriate since the patient is vomiting and unable to tolerate fluids.",
            2: "• C) Potassium supplementation is typically given after insulin is started, but it is not required immediately unless the potassium levels drop.",
            3: "• D) Insulin infusion at 0.2 units/kg/h would be too high for initial treatment, as the standard starting dose is 0.1 units/kg/h.",
            4: "• E) Intravenous bicarbonate is not indicated unless the pH is critically low (<6.9), and this patient’s pH is 7.0, which is not severe enough for bicarbonate therapy."
        }
    },
    {
        question: "26. A 13-year-old girl with Type 1 Diabetes is admitted with diabetic ketoacidosis (DKA). Her initial potassium level is 3.0 mEq/L, and she has been started on an insulin infusion. What should be done next?",
        options: ["A) Administer 20 mEq of potassium intravenously", "B) Monitor potassium levels closely and supplement if necessary", "C) Increase the insulin infusion rate to 0.2 units/kg/h", "D) Give sodium bicarbonate to correct acidosis", "E) Start oral rehydration fluids"],
        correct: 1,
        explanations: {
            0: "Explanation: In DKA, insulin causes potassium to shift into cells, and therefore, potassium levels may drop. Since the initial potassium level is low (3.0 mEq/L), it is critical to monitor potassium levels closely and begin potassium supplementation if the levels fall below the normal range.",
            1: "• A) Administering 20 mEq of potassium intravenously is premature, as the potassium level may not drop further if it is not already below the threshold.",
            2: "• C) Increasing the insulin infusion rate is not indicated unless glucose levels are not responding appropriately to the initial dose.",
            3: "• D) Giving sodium bicarbonate is not recommended unless the pH is critically low (<6.9).",
            4: "• E) Oral rehydration fluids are not appropriate in this situation, as the patient is likely unable to tolerate oral fluids due to vomiting and dehydration."
        }
    },
    {
        question: "27. A 12-year-old boy with Type 1 Diabetes presents to the emergency room with vomiting, abdominal pain, and confusion. His blood glucose is 1000 mg/dL, and he has a fruity odor to his breath. He is tachycardic, hypotensive, and has Kussmaul breathing. His pH is 7.1, and his bicarbonate is 10 mEq/L. What is the most likely cause of his symptoms?",
        options: ["A) Diabetic Ketoacidosis (DKA)", "B) Hyperosmolar Hyperglycemic State (HHS)", "C) Acute Gastroenteritis", "D) Diabetic Hypoglycemia", "E) Asthma attack with hyperglycemia"],
        correct: 0,
        explanations: {
            0: "Explanation: The combination of vomiting, abdominal pain, and tachycardia, along with Kussmaul breathing, fruity breath, and severe hyperglycemia (1000 mg/dL) with acidosis (pH of 7.1), points to Diabetic Ketoacidosis (DKA). Kussmaul breathing is a compensatory mechanism for the metabolic acidosis seen in DKA.",
            1: "• B) Hyperosmolar Hyperglycemic State (HHS) is unlikely in this child because HHS does not typically present with acidosis or ketonuria.",
            2: "• C) Acute Gastroenteritis can cause vomiting but would not lead to such a high glucose level or significant acidosis.",
            3: "• D) Diabetic Hypoglycemia would present with symptoms such as shaking, sweating, and confusion but not vomiting, abdominal pain, or hyperglycemia.",
            4: "• E) Asthma attack with hyperglycemia would present with wheezing and difficulty breathing, not Kussmaul breathing or acidosis."
        }
    },
    {
        question: "28. A 14-year-old boy with Type 1 Diabetes is diagnosed with diabetic ketoacidosis (DKA). His initial treatment includes intravenous fluids and insulin infusion. His potassium level is found to be 5.2 mEq/L. What is the next step in managing his potassium level?",
        options: ["A) No action is needed; continue insulin infusion", "B) Administer potassium supplements", "C) Increase insulin infusion rate", "D) Recheck potassium in 1 hour and adjust therapy accordingly", "E) Start potassium infusion immediately"],
        correct: 0,
        explanations: {
            0: "Explanation: The patient’s potassium level is normal (5.2 mEq/L), so no immediate action is needed in terms of supplementation. Potassium should be monitored regularly, and if the level drops below normal, supplementation can then be initiated.",
            1: "• B) Administering potassium supplements is unnecessary, as the potassium level is within the normal range.",
            2: "• C) Increasing the insulin infusion rate is not indicated unless there is insufficient reduction in blood glucose levels, which is not suggested here.",
            3: "• D) Rechecking potassium in 1 hour is appropriate but does not require immediate supplementation. Regular monitoring is sufficient.",
            4: "• E) Starting potassium infusion is premature and unnecessary unless the potassium level decreases."
        }
    },
    {
        question: "29. A 13-year-old girl with Type 1 Diabetes presents to the emergency room with nausea, vomiting, and abdominal pain. Her blood glucose is 780 mg/dL, and her laboratory findings include pH 7.0 and bicarbonate 8 mEq/L. What complication should be closely monitored during her treatment for DKA?",
        options: ["A) Hypokalemia", "B) Hypernatremia", "C) Hypoglycemia", "D) Hyperkalemia", "E) Hypertension"],
        correct: 0,
        explanations: {
            0: "Explanation: Hypokalemia is a common complication during DKA treatment because the administration of insulin causes potassium to shift from the extracellular to the intracellular space. This can lead to a drop in serum potassium levels, which requires monitoring and possibly supplementation.",
            1: "• B) Hypernatremia is not typically associated with DKA and would not be expected with the usual fluids given (normal saline, which is isotonic).",
            2: "• C) Hypoglycemia can occur during DKA treatment if insulin is given too quickly, but the priority is managing hyperglycemia and ketone levels initially.",
            3: "• D) Hyperkalemia is less common in DKA unless kidney function is impaired, and potassium levels are usually normal or low early in the treatment.",
            4: "• E) Hypertension is not a typical complication of DKA; blood pressure is more commonly low due to dehydration."
        }
    },
    {
        question: "30. A 12-year-old boy with Type 1 Diabetes presents with nausea, vomiting, abdominal pain, and tachypnea. His blood glucose level is 780 mg/dL, his pH is 7.08, and bicarbonate is 14 mEq/L. His potassium level is 4.0 mEq/L. What is the most appropriate action in managing his potassium during DKA treatment?",
        options: ["A) Start potassium supplementation immediately", "B) Monitor potassium levels every 2 hours and adjust treatment as necessary", "C) Delay insulin infusion until potassium levels rise above 5.0 mEq/L", "D) Start potassium infusion immediately regardless of current levels", "E) Stop insulin infusion if potassium levels drop below 3.5 mEq/L"],
        correct: 1,
        explanations: {
            0: "Explanation: In this patient with DKA, potassium levels should be monitored frequently, as insulin therapy can cause potassium to shift into cells. Since the initial potassium level is 4.0 mEq/L, which is within the normal range (3.5–5.0 mEq/L), immediate potassium supplementation is not required. Regular monitoring will help guide the need for potassium supplementation if the level drops below 3.5 mEq/L during the course of treatment.",
            1: "• A) Starting potassium supplementation immediately is unnecessary because the potassium level is in the normal range.",
            2: "• C) Delaying insulin infusion until potassium levels rise is not appropriate. Insulin should be started promptly, and potassium levels can be managed afterward.",
            3: "• D) Starting potassium infusion immediately is not needed unless potassium levels fall below 3.5 mEq/L.",
            4: "• E) Stopping insulin infusion if potassium levels drop below 3.5 mEq/L is not recommended. Insulin should continue, but potassium supplementation may be necessary."
        }
    }
];

let currentQuestion = 0;
let score = 0;
let userAnswers = new Array(quizData.length).fill(null);

document.addEventListener("DOMContentLoaded", function() {
    console.log("Page loaded");
    displayQuestion();
})



function displayQuestion() {
    console.log("displayQuestion called");
    const questionContainer = document.getElementById("question-container");
    console.log("questionContainer:", questionContainer);
    questionContainer.innerHTML = "";

    const questionElement = document.createElement("h2");
    questionElement.textContent = quizData[currentQuestion].question;

    const optionsElement = document.createElement("ul");
    quizData[currentQuestion].options.forEach((option, index) => {
        const liElement = document.createElement("li");
        const inputElement = document.createElement("input");
        const labelElement = document.createElement("label");

        inputElement.type = "radio";
        inputElement.name = "option";
        inputElement.value = index;

        if(userAnswers[currentQuestion] !== null && userAnswers[currentQuestion] == index) {
            inputElement.checked = true;
            inputElement.disabled = true;
        }

        labelElement.textContent = option;

        liElement.appendChild(inputElement);
        liElement.appendChild(labelElement);

        optionsElement.appendChild(liElement);
    });

    questionContainer.appendChild(questionElement);
    questionContainer.appendChild(optionsElement);

    const feedbackContainer = document.getElementById("feedback-container");
    feedbackContainer.innerHTML = "";

    const submitButton = document.getElementById("submit-btn");
    const nextButton = document.getElementById("next-btn");

    if(userAnswers[currentQuestion] !== null) {
        submitButton.style.display = "none";
        nextButton.style.display = "block";
    } else {

        submitButton.style.display = "block";
        nextButton.style.display = "none";
    }

    const previousButton = document.getElementById("previous-btn");
if(currentQuestion === 0) {
    previousButton.style.display = "none";
} else {
    previousButton.style.display = "block";
}

}



document.getElementById("submit-btn").addEventListener("click", function() {
    const feedbackContainer = document.getElementById("feedback-container");
    const userAnswer = document.querySelector("input[name='option']:checked");
    const correctAnswer = quizData[currentQuestion].correct;

    if (!userAnswer) {
        feedbackContainer.textContent = "Please select an answer.";
        return;
    }
    userAnswers[currentQuestion] = parseInt(userAnswer.value);

    if (userAnswer.value == correctAnswer) {
        score++;
        feedbackContainer.textContent = "Correct!";
    } else {
        feedbackContainer.textContent = "Incorrect.";
    }

    const explanationsContainer = document.createElement("div");
    
    quizData[currentQuestion].options.forEach((option, index) => {
        const explanationElement = document.createElement("p");
        explanationElement.textContent = quizData[currentQuestion].explanations[index];
        explanationsContainer.appendChild(explanationElement);
    });

    feedbackContainer.appendChild(explanationsContainer);
    
    document.getElementById("submit-btn").style.display = "none";
    document.getElementById("next-btn").style.display = "block";

     if (currentQuestion === quizData.length - 1) {
        document.getElementById("next-btn").textContent = "Finish";
        const score = quizData[currentQuestion].correct ? score + 1 : score;
        window.location.href = 'results.html?score=${score}$total=${quizData.length}';
    }
});

document.getElementById("next-btn").addEventListener("click", function() {
    currentQuestion++;
    if (currentQuestion >= quizData.length) {
        const feedbackContainer = document.getElementById("feedback-container");
        feedbackContainer.innerHTML = "";
        const scoreElement = document.createElement("p");
        scoreElement.textContent = `Quiz finished! Your final score is ${score} out of ${quizData.length}.`;
        feedbackContainer.appendChild(scoreElement);
        document.getElementById("next-btn").style.display = "none";
    } else {
        displayQuestion();
        document.getElementById("submit-btn").style.display = "block";
        document.getElementById("next-btn").style.display = "none";
    }
}); 

document.getElementById("previous-btn").addEventListener("click", function() {
    currentQuestion--;
    displayQuestion();

    document.getElementById("submit-btn").style.display = "block";
    document.getElementById("next-btn").style.display = "none";
})
