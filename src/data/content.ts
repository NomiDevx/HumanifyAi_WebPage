import { PortraitSample, SignatureStyle, FAQItem } from '../types';

export const PORTRAIT_SAMPLES: PortraitSample[] = [
  {
    id: 'sample-1',
    name: 'Elena — Cinematic Studio Portrait',
    modelOrigin: 'Midjourney v6 Raw',
    category: 'Commercial Studio',
    // Using ultra-high resolution photography showing real facial skin texture & pores
    beforeImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
    afterImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=95',
    beforeDescription: 'Waxy plastic sheen, blurred pores, uncanny porcelain lighting, synthetic hair edges.',
    afterDescription: 'Subtle micro-follicles, lifelike skin transillumination, analog warmth, natural eye reflections.',
    stats: {
      poreDetail: '+94% natural texture',
      filmGrain: 'Kodak Portra 400 grain',
      organicDepth: 'Physically accurate lighting'
    }
  },
  {
    id: 'sample-2',
    name: 'Marcus — Editorial Close-Up',
    modelOrigin: 'Flux.1 Pro Dev',
    category: 'Editorial',
    beforeImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80',
    afterImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=95',
    beforeDescription: 'Excessive digital denoising, unnatural skin gradient, fake specular highlights.',
    afterDescription: 'Organic stubble texture, micro-creases around eyes, realistic depth of field falloff.',
    stats: {
      poreDetail: '+98% micro-contrast',
      filmGrain: 'Ilford HP5 Plus analog structure',
      organicDepth: 'Balanced dynamic range'
    }
  },
  {
    id: 'sample-3',
    name: 'Aria — Natural Golden Hour',
    modelOrigin: 'Stable Diffusion XL',
    category: 'Candid Street',
    beforeImg: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80',
    afterImg: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=95',
    beforeDescription: 'Over-saturated neon flare, CGI airbrushed cheekbones, plastic teeth rendering.',
    afterDescription: 'Gentle solar diffusion, authentic skin melanin gradients, subtle peach fuzz micro-hair.',
    stats: {
      poreDetail: '+91% dermis fidelity',
      filmGrain: 'Fuji Pro 400H warmth',
      organicDepth: 'Diffused sun shadow falloff'
    }
  },
  {
    id: 'sample-4',
    name: 'Chloe — Candid Film Look',
    modelOrigin: 'DALL-E 3 Portrait',
    category: 'Vintage 35mm',
    beforeImg: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    afterImg: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=95',
    beforeDescription: 'Unrealistic digital sharpness, lifeless eye pupils, cartoonish saturation.',
    afterDescription: 'Vintage 35mm aperture vignette, realistic moisture in cornea, balanced skin undertones.',
    stats: {
      poreDetail: '+89% tonal depth',
      filmGrain: 'Agfa Vista 200 character',
      organicDepth: 'True optical halation'
    }
  }
];

export const SIGNATURE_STYLES: SignatureStyle[] = [
  {
    id: 'natural-skin',
    number: '01',
    title: 'Natural Skin',
    tagline: 'Balanced micro-texture restoration & organic pores',
    description: 'The everyday essential for AI portraits. Restores subtle epidermal porosity, cancels synthetic silicone airbrushing, and rebalances facial transillumination without altering facial geometry.',
    idealFor: 'Midjourney & SDXL portraits that look overly airbrushed or waxy.',
    badge: 'Most Popular',
    accentColor: 'from-violet-500 to-indigo-500',
    settings: {
      grain: 22,
      microTexture: 92,
      warmth: 48,
      specular: 35
    },
    sampleImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'soft-film',
    number: '02',
    title: 'Soft Film',
    tagline: 'Analog 35mm warmth & delicate cinematic grain',
    description: 'Imbues sterile digital pixels with the timeless organic chemistry of Kodak Portra 400 and Fuji 400H. Adds soft highlight rolloff, tender shadow lift, and non-repeating chemical grain.',
    idealFor: 'Creative headshots, lifestyle portraits, and moodboards.',
    badge: 'Photographer Choice',
    accentColor: 'from-amber-500 to-rose-500',
    settings: {
      grain: 68,
      microTexture: 84,
      warmth: 72,
      specular: 28
    },
    sampleImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'studio-portrait',
    number: '03',
    title: 'Studio Portrait',
    tagline: 'Commercial lighting, sharp definition & specular contrast',
    description: 'Emulates a high-end Profoto softbox and Hasselblad medium format capture. Enhances eyelash separation, iris fiber depth, and controlled rim lighting while killing CGI plastic sheen.',
    idealFor: 'LinkedIn headshots, executive avatars, and model portfolios.',
    badge: 'Pro Grade',
    accentColor: 'from-cyan-500 to-blue-600',
    settings: {
      grain: 15,
      microTexture: 98,
      warmth: 50,
      specular: 75
    },
    sampleImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'candid-vintage',
    number: '04',
    title: 'Candid Vintage',
    tagline: 'Authentic retro camera tone & nostalgic muted range',
    description: 'Channeling 90s disposable cameras and Japanese point-and-shoots. Features mild optical aberration, atmospheric lens flare, subdued green-cyan tint, and genuine snapshot soul.',
    idealFor: 'Instagram aesthetic grids, nostalgic reels, and street portraits.',
    badge: 'Retro Vibe',
    accentColor: 'from-emerald-500 to-teal-600',
    settings: {
      grain: 82,
      microTexture: 76,
      warmth: 65,
      specular: 20
    },
    sampleImage: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'crisp-detail',
    number: '05',
    title: 'Crisp Detail',
    tagline: 'Fine micro-enhancement for eyelashes, hair & contours',
    description: 'Surgical edge reconstruction that removes the characteristic "mushy AI hair" and synthetic blurred ears. Resurrects individual keratin strands, fine eyebrow hairs, and fabric weaves.',
    idealFor: 'Close-ups with blurred hair clusters, blurry fabric, or fuzzy eye details.',
    badge: 'Ultra High-Res',
    accentColor: 'from-fuchsia-500 to-purple-600',
    settings: {
      grain: 10,
      microTexture: 100,
      warmth: 46,
      specular: 60
    },
    sampleImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80'
  }
];

export const PROBLEM_SOLUTION_ITEMS = [
  {
    feature: 'Skin Texture',
    problem: 'Waxy Silicone Surface',
    problemDesc: 'AI models average pixel gradients, erasing pores and creating a plastic mannequin sheen that instantly signals "fake".',
    solution: 'Cellular Micro-Pores & Texture',
    solutionDesc: 'Humanify AI synthesizes realistic epidermal dermis pores, micro-creases, and natural subsurface light scattering.',
    badge: 'Texture Engine'
  },
  {
    feature: 'Light Interaction',
    problem: 'Synthetic Flat Glare',
    problemDesc: 'Harsh, uniform CGI illumination with impossible reflection angles and glossy hot spots on foreheads and noses.',
    solution: 'Organic Studio Light Falloff',
    solutionDesc: 'Physically calculated photon absorption with soft penumbra shadows and authentic corneal catchlights.',
    badge: 'Light Science'
  },
  {
    feature: 'Hair & Fiber Details',
    problem: 'Melted Hair Strands',
    problemDesc: 'Generative models notoriously bundle hair into mushy spaghetti strands or blurred fuzzy clumps.',
    solution: 'Keratin Strand Definition',
    solutionDesc: 'Reconstructs individual hair fibers, realistic flyaways, and organic shadow occlusion between hair locks.',
    badge: 'Strand Geometry'
  },
  {
    feature: 'Color Science',
    problem: 'Digital Over-Saturation',
    problemDesc: 'Hyper-vivid, garish digital color spaces with unnatural magenta and neon yellow undertones.',
    solution: 'Analog Emulsion Science',
    solutionDesc: 'Calibrated analog film color lookup curves (Kodak, Fuji, Ilford) delivering rich, pleasing, human tones.',
    badge: 'Color Grading'
  }
];

export const TRUST_PILLARS = [
  {
    title: '100% On-Device Processing',
    description: 'All AI post-processing runs locally using your phone’s Neural Processing Unit (NPU). No images ever leave your hardware.',
    tag: 'Snapdragon & Tensor NPU',
    iconName: 'Cpu'
  },
  {
    title: 'Zero Cloud Uploads',
    description: 'Humanify AI operates completely offline. We do not maintain image servers, cloud databases, or remote staging pipelines.',
    tag: '100% Offline Capable',
    iconName: 'CloudOff'
  },
  {
    title: 'Zero Facial Training / Scraping',
    description: 'Your biometric features and face geometry are never collected, profiled, or fed into machine learning training datasets.',
    tag: 'Biometric Safe',
    iconName: 'ShieldAlert'
  },
  {
    title: 'Local Sandboxed SQLite Vault',
    description: 'Your project history, style presets, and exports reside exclusively inside the private Android app sandbox.',
    tag: 'Auto-Purge on Uninstall',
    iconName: 'Database'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Import Any AI Portrait',
    description: 'Select renders directly from Midjourney, Stable Diffusion, Flux, Leonardo, or avatar apps from your gallery.',
    accent: 'from-purple-500 to-indigo-500',
    actionText: 'Supports PNG, JPG, WEBP, and RAW up to 64MP'
  },
  {
    step: '02',
    title: 'Dial In Naturalness',
    description: 'Choose one of our 5 signature natural styles and fine-tune skin pore micro-texture, film grain, and organic warmth with intuitive sliders.',
    accent: 'from-indigo-500 to-cyan-500',
    actionText: 'Instant Real-time NPU Preview in 60 FPS'
  },
  {
    step: '03',
    title: 'Export Uncompressed',
    description: 'Save studio-quality, true-to-life portraits in lossless resolution directly to your camera roll or share to social platforms.',
    accent: 'from-cyan-500 to-emerald-500',
    actionText: 'Lossless Export • No Watermarks • Zero Ads'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Features',
    question: 'What makes Humanify AI different from other photo enhancers?',
    answer: 'Traditional enhancers simply apply generic sharpening, contrast boosts, or AI face-swaps—which ironically makes AI portraits look even more fake and cartoonish. Humanify AI does the exact opposite: it is an AI photo NATURALIZER. It uses specialized micro-texture diffusion and analog film color science to reverse the "plastic uncanny valley" by synthesizing authentic skin pores, delicate film grain, realistic specular catchlights, and organic light falloff without altering facial structure.'
  },
  {
    id: 'faq-2',
    category: 'Privacy',
    question: 'Does the app upload my private photos to cloud servers?',
    answer: 'Absolutely not. Humanify AI is built on a 100% on-device architecture. All image processing and naturalization happens locally using your smartphone’s Neural Processing Unit (NPU) and GPU. Your photos are never sent to external servers, we do not operate image clouds, and you can comfortably use the entire app in Airplane Mode.'
  },
  {
    id: 'faq-3',
    category: 'Compatibility',
    question: 'Which AI models and image formats are supported?',
    answer: 'Humanify AI is model-agnostic. It works seamlessly with portraits generated by Midjourney (v5, v6, Niji), Stable Diffusion (SD 1.5, SDXL, SD 3), Flux.1, DALL-E 3, Leonardo AI, Ideogram, Lensa, and any custom LoRA or photography generator. We support PNG, JPG, JPEG, WEBP, and HEIC file formats up to 64 Megapixels.'
  },
  {
    id: 'faq-4',
    category: 'Features',
    question: 'Can I adjust the intensity of the naturalizing effect?',
    answer: 'Yes! While each signature style comes with tuned, photorealistic defaults, you have full creative control. You can adjust the master Naturalness slider from 0% to 100%, or unlock Pro Sliders to individually calibrate Skin Pore Texture, Film Grain (ISO 50 to 3200), Organic Depth, Lens Halation, and Color Warmth.'
  },
  {
    id: 'faq-5',
    category: 'Billing',
    question: 'Is Humanify AI available on Google Play?',
    answer: 'Yes! Humanify AI is available directly on the Google Play Store (Package ID: com.humanifyai). It is compatible with Android devices running Android 10 and above with ARM64 architecture for hardware-accelerated NPU inference.'
  },
  {
    id: 'faq-6',
    category: 'Privacy',
    question: 'Do you use my face or uploaded photos to train AI models?',
    answer: 'Never. Because our processing engine is completely offline and self-contained on your device, we have zero access to your photos, biometric landmarks, or identity. We firmly oppose training generative AI on user data.'
  },
  {
    id: 'faq-7',
    category: 'Features',
    question: 'Does it change my facial features or identity?',
    answer: 'No. Humanify AI preserves 100% of facial identity, eye shape, nose contours, jawline, and unique characteristics. It only refines the surface rendering quality—transforming synthetic, waxy pixels into organic, breathable photographic textures.'
  }
];
