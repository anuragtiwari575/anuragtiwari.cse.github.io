// Everything on the site that is not a publication or a news item lives here.
// Edit this file to update the website; the pages read from it.

export const profile = {
  name: "Anurag Tiwari",
  title: "Assistant Professor, Computer Science and Engineering",
  institution: "South Asian University, New Delhi",
  lede: "I develop advanced machine learning and neural representation learning methods for complex, high-dimensional biological data, with a particular focus on brain signals, medical imaging, and omics. My research emphasises methodological innovation, robust computational modelling, interpretability, and generalisation across unseen subjects and independent clinical cohorts.",
  emails: ["anuragtiwari@sau.int", "anuragtiwari.rs.cse17@itbhu.ac.in"],
  address: ["Department of Computer Science and Engineering", "South Asian University, Maidan Garhi", "New Delhi 110068, India"],
  scholar: "https://scholar.google.com/citations?user=HLtrjaMAAAAJ&hl=en",
  orcid: "https://orcid.org/0000-0001-6816-0113",
  github: "https://github.com/anuragtiwari575",
  // Put the PDF at public/files/anurag-tiwari-cv.pdf and set this to "files/anurag-tiwari-cv.pdf"
  cvPdf: null,
  metrics: "Cited 545 times on Google Scholar (June 2026), h-index 9, i10-index 9."
};

export const bio = [
  "I am an Assistant Professor in the Department of Computer Science and Engineering at South Asian University, New Delhi. Before joining SAU in May 2026, I taught at Thapar Institute of Engineering and Technology, Patiala, and at VIT Bhopal University.",
  "I completed my PhD in Computer Science and Engineering at IIT (BHU) Varanasi, where I worked on channel and feature selection for non-invasive brain–computer interfaces. My research now covers sequential modelling of neural time series (EEG, iEEG, sEMG), representation learning, medical imaging (MRI and CT) and multi-omics data.",
  "A recurring theme is evaluation that can be trusted: subject-level validation, auditing medical-imaging benchmarks for patient-level leakage, and testing whether learned representations stay stable under perturbation."
];

// Research focus: shown as cards on the homepage.
export const focus = [
  { title: "Motor Imagery and Visual Imagery", text: "Investigating neural activity patterns and developing decoding methods for brain–computer interface applications." },
  { title: "Neural Representation Learning", text: "Learning meaningful and discriminative representations from complex neural signals and multimodal brain data." },
  { title: "Neural Signal Decoding", text: "Developing computational approaches for understanding and interpreting brain activity." },
  { title: "Epilepsy and Seizure Dynamics", text: "Computational characterisation of epileptic activity, seizure patterns, and interictal neural biomarkers." },
  { title: "Presurgical Neuroimaging", text: "Identifying imaging patterns and biomarkers to support seizure localisation, epileptogenic zone characterisation, and presurgical evaluation." },
  { title: "Postsurgical Outcome Assessment", text: "Investigating imaging and neural patterns associated with surgical outcomes and seizure recurrence." }
];

export const openScience = "I strive to make my research code openly available and reusable, enabling fellow researchers and developers to build upon existing methods and contribute to the development of more effective medical and clinical systems.";

// key must match a theme key in publications.js
export const research = [
  { key: "signals", short: "Models for EEG, iEEG and sEMG that hold up across people.",
    text: "EEG, iEEG and sEMG are noisy, non-stationary and different for every person. I build spatiotemporal and representation-learning models for motor imagery, inner speech and gesture recognition, and test whether what they learn stays stable when the signal is perturbed." },
  { key: "evaluation", short: "Checks that catch leakage and inflated benchmark numbers.",
    text: "A model that recognises the patient rather than the disease looks excellent on a benchmark. I design the checks that catch this: leave-one-subject-out validation, patient-level leakage audits, and bootstrap and permutation comparisons." },
  { key: "optimization", short: "Choosing the few channels and features that matter.",
    text: "Most electrodes and most features add noise. My PhD at IIT (BHU) treated channel and feature selection as a combinatorial search, using binary butterfly, firefly and Jaya optimisers together with information-theoretic criteria." },
  { key: "imaging", short: "CT and MRI reconstruction and small-data classification.",
    text: "Sparse-view CT reconstruction, physics-guided MRI reconstruction, and classification on small, imbalanced clinical datasets such as brain MRI in Wilson’s disease." },
  { key: "biology", short: "Gene expression and multi-omics learning.",
    text: "Gene-expression meta-analysis, a review of the genetics of Wilson’s disease, and multi-omics learning for plant protein structure prediction. This is where I am taking statistical learning next: careful inference that generalises across cohorts." }
];

export const experience = [
  { when: "2026 – now", what: "Assistant Professor, Computer Science and Engineering", where: "South Asian University, New Delhi" },
  { when: "2022 – 2026", what: "Assistant Professor", where: "Thapar Institute of Engineering and Technology, Patiala" },
  { when: "2022", what: "Assistant Professor", where: "VIT Bhopal University" },
  { when: "2018 – 2022", what: "Doctoral researcher", where: "IIT (BHU) Varanasi" },
  { when: "2014 – 2016", what: "Research assistant", where: "IIIT Allahabad" }
];

export const education = [
  { when: "2018 – 2024", what: "PhD, Computer Science and Engineering", where: "IIT (BHU) Varanasi", note: "Thesis: Performance improvement in non-invasive brain–computer interfaces using combinatorial search space optimisation and machine learning. Defended March 2024." },
  { when: "2014 – 2016", what: "MTech, Computer Science and Engineering", where: "IIIT Allahabad", note: "GATE scholarship." },
  { when: "2007 – 2011", what: "BTech, Information Technology", where: "Uttar Pradesh Technical University" }
];

export const skills = [
  { area: "Statistical learning", items: "Supervised and representation learning, feature selection, calibration, uncertainty-aware modelling, robustness analysis" },
  { area: "Evaluation", items: "Leave-one-subject-out validation, patient-level leakage auditing, bootstrap and permutation tests" },
  { area: "Sequential data", items: "EEG, iEEG, LFP and sEMG; multivariate EMD, dynamic mode decomposition, singular spectrum decomposition" },
  { area: "Optimisation", items: "Combinatorial, multiobjective and metaheuristic search (butterfly, firefly, Jaya)" },
  { area: "Software", items: "Python, R, MATLAB; PyTorch, TensorFlow/Keras, JAX; MNE-Python, EEGLAB" }
];

export const awards = [
  "Best Paper Award, International Conference on Computer, Communication and Computational Sciences, Thailand, 2018",
  "Travel grant, IEEE/RSJ IROS, Macau, 2019",
  "GATE scholarship, 2014 – 2016"
];

// Teaching and Group appear in the menu only once these lists have entries.
// teaching: { course: "Machine Learning", code: "CSE501", level: "MTech", when: "Monsoon 2026", where: "SAU", link: optional }
export const teaching = [];
// students: { name: "", degree: "PhD", topic: "", since: 2026, status: "current" | "alumni", link: optional }
export const students = [];
export const openings = "I am glad to hear from students who want to do a PhD or a project in any of the research areas, and from researchers interested in collaborating. If you are a student, please attach your CV and say which theme interests you and why.";
