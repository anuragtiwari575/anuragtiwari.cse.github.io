// Single source of truth for the publication list (taken from the CV, Nov 2026).
// type:    "Journal article" | "Conference paper" | "Book chapter"
// status:  "published" | "accepted"
// theme:   "signals" | "evaluation" | "optimization" | "imaging" | "biology" | "other"
// featured: shown in "Selected publications" on the homepage
// Add doi / pdf / code fields to any entry and the links appear automatically.
export const publications = [
  {
    title: "SIA: A subject identifiability auditing framework for detecting patient-level leakage in medical imaging benchmarks",
    authors: "A. Tiwari, S. Tiwari",
    venue: "Indian Conference on Computer Vision, Graphics and Image Processing (ICVGIP)",
    year: 2026, type: "Conference paper", status: "accepted", theme: "evaluation", featured: true
  },
  {
    title: "PW-STAD: Photon-weighted structure-tensor anisotropic diffusion for sparse-view CT reconstruction",
    authors: "S. Tiwari, M. Khurana, A. Tiwari",
    venue: "Indian Conference on Computer Vision, Graphics and Image Processing (ICVGIP)",
    year: 2026, type: "Conference paper", status: "accepted", theme: "imaging", featured: true
  },
  {
    title: "Learning locally consistent representations for robust inner speech EEG modeling",
    authors: "A. Tiwari, S. Tiwari",
    venue: "International Conference on Industrial and Information Systems (ICIIS)",
    year: 2026, type: "Conference paper", status: "accepted", theme: "signals", featured: true
  },
  {
    title: "CRF-PMSAM: Progressive multi-scale attention with structured decoding for sEMG gesture recognition",
    authors: "A. Tiwari et al.",
    venue: "International Conference on Information Technology (OCIT)",
    year: 2026, type: "Conference paper", status: "accepted", theme: "signals"
  },
  {
    title: "Dual-branch physics-guided cascade network with learned gating for multi-anatomy MRI reconstruction",
    authors: "A. Tiwari",
    venue: "International Conference on Contemporary Computing (IC3)",
    year: 2026, type: "Conference paper", status: "accepted", theme: "imaging"
  },
  {
    title: "Density-corrected K-means with deep feature embedding for robust image segmentation",
    authors: "A. Tiwari",
    venue: "IEEE Uttar Pradesh Section International Conference (UPCON)",
    year: 2026, type: "Conference paper", status: "accepted", theme: "imaging"
  },
  {
    title: "DeepStruct: Multi-modal deep learning integrating omics and energy scoring for protein structure prediction in plants",
    authors: "A. Tiwari, R. Raj, M. Khurana",
    venue: "Computational Biology and Chemistry, 109076",
    year: 2026, type: "Journal article", status: "published", theme: "biology", featured: true
  },
  {
    title: "A spatiotemporal learning framework with causality-aware feature modulation and stacked Riemannian autoencoder for multiclass motor imagery classification",
    authors: "A. Tiwari, S. Tiwari",
    venue: "Biomedical Signal Processing and Control, 125, 110715",
    year: 2026, type: "Journal article", status: "published", theme: "signals", featured: true
  },
  {
    title: "Deep learning-based blockchain framework for fraud detection using multilevel supervision in hierarchical generative hashing",
    authors: "I. K. A. Hamdan, W. Aziguli, D. Zhang, et al. (incl. A. Tiwari)",
    venue: "International Journal of Machine Learning and Cybernetics, 17, 15",
    year: 2026, type: "Journal article", status: "published", theme: "other", citations: 4
  },
  {
    title: "A novel fractional curvelet–shearlet transform fusion with statistical embedding for robust face antispoofing",
    authors: "A. Tiwari",
    venue: "International Conference on Computer Vision and Image Processing (CVIP)",
    year: 2025, type: "Conference paper", status: "published", theme: "imaging"
  },
  {
    title: "A hybrid feature selection method using an improved binary butterfly optimization algorithm and adaptive β-hill climbing",
    authors: "A. Tiwari",
    venue: "IEEE Access, 11, 93511–93537",
    year: 2023, type: "Journal article", status: "published", theme: "optimization", citations: 30
  },
  {
    title: "Wilson’s disease classification using higher-order Gabor tensors and various classifiers on a small and imbalanced brain MRI dataset",
    authors: "A. Tiwari",
    venue: "Multimedia Tools and Applications, 82, 35121–35147",
    year: 2023, type: "Journal article", status: "published", theme: "imaging", citations: 9
  },
  {
    title: "A logistic binary Jaya optimization-based channel selection scheme for motor-imagery classification in brain–computer interface",
    authors: "A. Tiwari",
    venue: "Expert Systems with Applications, 223, 119921",
    year: 2023, type: "Journal article", status: "published", theme: "optimization", citations: 50
  },
  {
    title: "Automatic EEG channel selection for multiclass brain–computer interface classification using multiobjective improved firefly algorithm",
    authors: "A. Tiwari, A. Chaturvedi",
    venue: "Multimedia Tools and Applications, 82(4), 5405–5433",
    year: 2023, type: "Journal article", status: "published", theme: "optimization", citations: 48
  },
  {
    title: "Automatic channel selection using multiobjective X-shaped binary butterfly algorithm for motor imagery classification",
    authors: "A. Tiwari, A. Chaturvedi",
    venue: "Expert Systems with Applications, 206, 117757",
    year: 2022, type: "Journal article", status: "published", theme: "optimization", citations: 37
  },
  {
    title: "A hybrid feature selection approach based on information theory and dynamic butterfly optimization algorithm for data classification",
    authors: "A. Tiwari, A. Chaturvedi",
    venue: "Expert Systems with Applications, 196, 116621",
    year: 2022, type: "Journal article", status: "published", theme: "optimization", featured: true, citations: 202
  },
  {
    title: "A multichannel EEG signal classification model using channel interaction maximization and MEMD feature extraction",
    authors: "A. Tiwari",
    venue: "International Conference on Neural Information Processing (ICONIP)",
    year: 2022, type: "Conference paper", status: "published", theme: "signals"
  },
  {
    title: "Higher-order dynamic mode decomposition and multichannel singular spectrum decomposition hybridization for BCI feature extraction",
    authors: "A. Tiwari, S. Mishra",
    venue: "International Conference for Advancement in Technology (ICONAT), 1–6",
    year: 2022, type: "Conference paper", status: "published", theme: "signals", citations: 8
  },
  {
    title: "A novel channel selection method for BCI classification using dynamic channel relevance",
    authors: "A. Tiwari, A. Chaturvedi",
    venue: "IEEE Access, 9, 126698–126716",
    year: 2021, type: "Journal article", status: "published", theme: "signals", featured: true, citations: 56
  },
  {
    title: "A multiclass EEG signal classification model using spatial feature extraction and XGBoost algorithm",
    authors: "A. Tiwari, A. Chaturvedi",
    venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 4169–4175",
    year: 2019, type: "Conference paper", status: "published", theme: "signals", citations: 52
  },
  {
    title: "Wilson’s disease: A new perspective review on its genetics, diagnosis and treatment",
    authors: "L. Saba, A. Tiwari, M. Biswas, S. K. Gupta, E. Godia-Cuadrado, A. Chaturvedi, et al.",
    venue: "Frontiers in Bioscience–Elite, 11(1), 166–185",
    year: 2019, type: "Journal article", status: "published", theme: "biology", citations: 24
  },
  {
    title: "Large-scale meta-analysis of genes encoding pattern in Wilson’s disease",
    authors: "D. Misra, A. Tiwari, A. Chaturvedi",
    venue: "Advances in Computer Communication and Computational Sciences, 389–400, Springer",
    year: 2019, type: "Conference paper", status: "published", theme: "biology"
  },
  {
    title: "Deep learning: An overview and innovative approach in machine learning",
    authors: "A. Sinha, S. K. Gupta, A. Tiwari, A. Chaturvedi",
    venue: "Hidden Link Prediction in Stochastic Social Networks, 108–134",
    year: 2019, type: "Book chapter", status: "published", theme: "other", citations: 2
  },
  {
    title: "Design pattern detection using machine learning techniques",
    authors: "S. Chaturvedi, A. Chaturvedi, A. Tiwari, S. Agarwal",
    venue: "International Conference on Reliability, Infocom Technologies and Optimization (ICRITO), 1–6",
    year: 2018, type: "Conference paper", status: "published", theme: "other", citations: 24
  },
  {
    title: "Class partition approach for software effort estimation using support vector machine",
    authors: "A. Tiwari, A. Chaturvedi",
    venue: "IEEE Uttar Pradesh Section International Conference (UPCON), 653–659",
    year: 2016, type: "Conference paper", status: "published", theme: "other", citations: 2
  }
];

export const themes = {
  signals: "Neural and physiological time series",
  evaluation: "Evaluation you can trust",
  optimization: "Feature and channel selection",
  imaging: "Medical imaging",
  biology: "Biological and multi-omics data",
  other: "Other work"
};
