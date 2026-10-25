/**
 * Seven Palm Interio - Ranchi Jharkhand
 * Luxury Editorial Interactive Application Logic
 */

// 1. PROJECT CASE STUDY DATABASE
const CASE_STUDIES = {
  'kitchen-hinoo': {
    title: 'The Kilburn Slate & Quartz Kitchen',
    subtitle: 'Factory-Finish Modular Kitchen in Kilburn Colony, Hinoo, Ranchi',
    category: 'Modular Kitchen (German Hardware)',
    timeline: '38 Calendar Days Handover',
    budget: '₹4.8L - ₹6.5L',
    warranty: '10-Year Factory Replacement Warranty',
    heroImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=85',
    brief: 'A modern homeowner in Hinoo required an ergonomic, anti-termite and moisture-resistant modular kitchen layout capable of high-heat Indian cooking without oil stains or yellowing acrylic surfaces.',
    concept: 'We engineered an L-shaped counter configuration with handleless black Gola profile channels, soft-close Blum Antaro pull-out baskets, and an integrated Häfele high-suction chimney ducted directly to the exterior wall.',
    execution: 'Constructed using 18mm Boiling Water Resistant (BWR) Marine Grade plywood with 1mm anti-scratch acrylic front fascias, fully calibrated on our computerized edge-banding line.',
    materials: [
      'Calacatta White Nano Quartz (Non-porous & Stain-proof)',
      '18mm High-Density Marine Core (Boiling Waterproof)',
      'Blum Soft-Close Tandembox Runners (60kg load capacity)',
      'Matte Slate Grey Acrylic (Anti-Fingerprint)',
      'Under-cabinet 3000K Warm Architectural Strip Lighting'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80'
    ]
  },
  'apartment-morabadi': {
    title: 'The Morabadi Horizon Penthouse',
    subtitle: 'Complete 4BHK Turnkey Interior at Morabadi, Ranchi',
    category: 'Luxury Residence / Penthouse',
    timeline: '52 Days from Blueprint to Handover',
    budget: '₹16.5L - ₹19.5L (Turnkey)',
    warranty: '10-Year Structural & Carcase Warranty',
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85',
    brief: 'The client, a senior physician family at Morabadi, sought a refined sanctuary free of visual noise, balancing tranquil private suites with an expansive entertainment lounge for hosting medical delegates.',
    concept: 'We introduced acoustic ceiling baffling with seamless cove lighting, fluted champagne wall paneling, and an open breakfast bar connecting the lounge to an island kitchen.',
    execution: 'Seven Palm Interio executed complete civil revisions, MEP electrical re-routing, bespoke master bedroom walk-in wardrobes with tinted Saint-Gobain glass, and Italian PU-finished cabinetry.',
    materials: [
      'Natural Smoked Walnut Veneer with Polyurethane (PU) Matte Coat',
      'Saint-Gobain Bronze Tinted Fluted Wardrobe Glass',
      'Concealed 2700K Architectural CCT LEDs with Dimming Drivers',
      'Italian Statuario Marble Feature Inlays',
      'Custom Bouclé Upholstered Headboards'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80'
    ]
  },
  'villa-kanke': {
    title: 'Villa Solstice at Kanke Road',
    subtitle: 'Architecture & Turnkey Interior, Kanke Road, Ranchi',
    category: 'Villas & Bungalows',
    timeline: '75 Working Days',
    budget: '₹28L - ₹35L Bespoke',
    warranty: '10-Year Comprehensive Warranty',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
    brief: 'An independent duplex villa surrounded by greenery along Kanke Road required a cohesive indoor-outdoor architectural design that celebrated natural Ranchi sandstone and tropical ventilation.',
    concept: 'We highlighted the 22-foot double-height living room with an integrated brass-and-wood acoustic feature wall, custom floating staircase with glass balustrades, and a sunken conversation pit.',
    execution: 'Turnkey fabrication included custom dining tables milled from single-slab reclaimed teak, automated motorized blinds, and an integrated home-automation lighting console.',
    materials: [
      'CP Teakwood solid framework & open-grain hand polishing',
      'Doughnut brass accents & brushed champagne hardware',
      '12mm Toughened laminated glass balustrades',
      'Micro-cement feature wall texture',
      'Custom architectural linear track fixtures'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80'
    ]
  },
  'cafe-lalpur': {
    title: 'Botanica Artisan Cafe & Lounge',
    subtitle: 'Boutique Commercial Interior in Lalpur, Ranchi',
    category: 'Commercial & Hospitality',
    timeline: '30 Days Rapid Turnaround',
    budget: '₹9L - ₹12L Commercial Fitout',
    warranty: '5-Year Commercial MEP & Millwork Warranty',
    heroImage: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1400&q=85',
    brief: 'A young restaurateur needed an Instagrammable, biophilic specialty cafe interior designed to maximize seat count without sacrificing intimacy or high acoustic comfort.',
    concept: 'Curved terracotta fluted service counter, suspended metal planters with automated drip misting, and warm amber pendant fixtures over terrazzo bistro tables.',
    execution: 'Completed in exactly 30 calendar days to avoid commercial lease overheads, fully complying with fire safety, commercial grease ventilation, and high-footfall epoxy flooring standards.',
    materials: [
      'Handmade Terracotta Fluted Tiles',
      'Seamless Terrazzo Table Surfaces',
      'Curved Brushed Brass Counter Trim',
      'Sound-dampening Acoustic Ceiling Baffles',
      'Commercial grade anti-slip matte epoxy flooring'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80'
    ]
  },
  'bedroom-doranda': {
    title: 'The Amber Oak Master Suite',
    subtitle: 'Bespoke Master Bedroom & Walk-In Wardrobe at Doranda, Ranchi',
    category: 'Custom Furniture & Suite',
    timeline: '25 Days',
    budget: '₹3.5L - ₹4.5L',
    warranty: '10-Year Factory Warranty',
    heroImage: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=85',
    brief: 'Designed for restful rejuvenation with sound isolation, integrated nightstand wireless chargers, and floor-to-ceiling wardrobe storage.',
    concept: 'Warm amber tones, upholstered headboard extending across the room, and tinted glass wardrobe with internal motion sensors.',
    execution: 'Factory-assembled wardrobe modules with custom jewelry organizers and built-in vanity lighting.',
    materials: [
      'Amber Oak Natural Veneer',
      'Plush Velvet Channel Headboard',
      'Soft-glow Motion Sensor Wardrobe Strips',
      'Soft-close telescopic wardrobe channels'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80'
    ]
  },
  'kitchen-bariatu': {
    title: 'The Bariatu Matte Champagne Island',
    subtitle: 'Luxury Island Modular Kitchen at Bariatu, Ranchi',
    category: 'Modular Kitchen (Island)',
    timeline: '42 Days',
    budget: '₹6.5L - ₹8.5L',
    warranty: '10-Year Factory Warranty',
    heroImage: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1400&q=85',
    brief: 'A modern family looking for an open island kitchen that doubles as an informal family dining and breakfast station.',
    concept: 'Waterfall quartz island with counter seating, built-in microwave oven tower, and tall pantry pull-out units.',
    execution: 'Pre-machined CNC carcase with anti-scratch matte champagne shutters and heavy-duty pantry organizers.',
    materials: [
      'Matte Champagne Acrylic Finish',
      'White Statuario Quartz Waterfall Slab',
      'Kesseböhmer Tall Pantry Unit',
      'Hafele Under-mount Black Granite Sink'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80'
    ]
  }
};

// 2. PORTFOLIO FILTERING
document.addEventListener('DOMContentLoaded', () => {
  initPortfolioFilters();
  initBeforeAfterSliders();
  initStyleQuiz();
  initDatePicker();
  initMobileMenu();
});

function initPortfolioFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.classList.remove('hidden');
          card.classList.add('animate-fadeIn');
        } else {
          card.classList.add('hidden');
          card.classList.remove('animate-fadeIn');
        }
      });
    });
  });
}

// 3. BEFORE / AFTER INTERACTIVE COMPARISON SLIDERS
function initBeforeAfterSliders() {
  const containers = document.querySelectorAll('.before-after-container');

  containers.forEach(container => {
    const beforeImageWrap = container.querySelector('.before-image-wrap');
    const handle = container.querySelector('.slider-handle');

    let isDown = false;

    const moveSlider = (clientX) => {
      const rect = container.getBoundingClientRect();
      let x = clientX - rect.left;
      
      // Clamp between 0 and rect.width
      if (x < 0) x = 0;
      if (x > rect.width) x = rect.width;

      const percentage = (x / rect.width) * 100;
      beforeImageWrap.style.width = `${percentage}%`;
      handle.style.left = `${percentage}%`;
    };

    // Mouse events
    container.addEventListener('mousedown', (e) => {
      isDown = true;
      moveSlider(e.clientX);
    });

    window.addEventListener('mouseup', () => {
      isDown = false;
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      moveSlider(e.clientX);
    });

    // Touch events for mobile phones
    container.addEventListener('touchstart', (e) => {
      isDown = true;
      moveSlider(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchend', () => {
      isDown = false;
    });

    window.addEventListener('touchmove', (e) => {
      if (!isDown) return;
      moveSlider(e.touches[0].clientX);
    }, { passive: true });
  });
}

// 4. STORY-DRIVEN CASE STUDY MODAL
function openCaseStudy(projectId) {
  const study = CASE_STUDIES[projectId];
  if (!study) return;

  const modal = document.getElementById('caseStudyModal');
  const content = document.getElementById('caseStudyContent');

  content.innerHTML = `
    <div class="relative">
      <button onclick="closeCaseStudy()" class="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/80 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-all">
        ✕
      </button>

      <!-- Hero Banner -->
      <div class="relative h-64 sm:h-96 overflow-hidden">
        <img src="${study.heroImage}" alt="${study.title}" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-[#121110] via-black/40 to-transparent"></div>
        <div class="absolute bottom-6 left-6 right-6">
          <span class="text-xs uppercase tracking-widest text-champagne-300 font-semibold bg-black/60 px-3 py-1 border border-white/10">
            ${study.category}
          </span>
          <h2 class="font-serif text-3xl sm:text-5xl text-white mt-2">${study.title}</h2>
          <p class="text-xs sm:text-sm text-stone-300 font-light mt-1">${study.subtitle}</p>
        </div>
      </div>

      <!-- Quick Metrics Bar -->
      <div class="bg-stone-900 border-y border-white/10 p-4 sm:p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
        <div>
          <span class="text-stone-400 block uppercase tracking-wider text-[10px]">Project Timeline</span>
          <span class="text-white font-medium text-sm font-serif text-champagne-200">${study.timeline}</span>
        </div>
        <div>
          <span class="text-stone-400 block uppercase tracking-wider text-[10px]">Verified Scope</span>
          <span class="text-white font-medium text-sm font-serif text-champagne-200">${study.budget}</span>
        </div>
        <div>
          <span class="text-stone-400 block uppercase tracking-wider text-[10px]">Studio Warranty</span>
          <span class="text-white font-medium text-sm font-serif text-champagne-200">10-Year Factory</span>
        </div>
        <div>
          <span class="text-stone-400 block uppercase tracking-wider text-[10px]">Studio Location</span>
          <span class="text-white font-medium text-sm font-serif text-champagne-200">Hinoo, Ranchi</span>
        </div>
      </div>

      <!-- Story Body -->
      <div class="p-6 sm:p-10 space-y-8">
        <div>
          <h3 class="text-xs uppercase tracking-widest text-champagne-400 font-bold mb-2">1. Client Challenge & Brief</h3>
          <p class="text-stone-300 text-sm font-light leading-relaxed">${study.brief}</p>
        </div>

        <div>
          <h3 class="text-xs uppercase tracking-widest text-champagne-400 font-bold mb-2">2. Architectural Conception</h3>
          <p class="text-stone-300 text-sm font-light leading-relaxed">${study.concept}</p>
        </div>

        <div>
          <h3 class="text-xs uppercase tracking-widest text-champagne-400 font-bold mb-2">3. Factory Execution in Ranchi</h3>
          <p class="text-stone-300 text-sm font-light leading-relaxed">${study.execution}</p>
        </div>

        <div>
          <h3 class="text-xs uppercase tracking-widest text-champagne-400 font-bold mb-3">4. Specified Material Palette</h3>
          <div class="flex flex-wrap gap-2 text-xs">
            ${study.materials.map(m => `<span class="px-3 py-1.5 bg-stone-900 border border-white/10 text-stone-200">${m}</span>`).join('')}
          </div>
        </div>

        <div class="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 class="font-serif text-xl text-white">Inspired by this project?</h4>
            <p class="text-xs text-stone-400">Let's discuss how Seven Palm Interio can transform your space in Ranchi.</p>
          </div>
          <button onclick="discussSimilarProject('${study.title}')" class="px-8 py-3.5 bg-champagne-400 hover:bg-champagne-300 text-stone-950 font-bold text-xs tracking-widest uppercase transition-colors">
            Discuss a Similar Project
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  lucide.createIcons();
}

function closeCaseStudy() {
  const modal = document.getElementById('caseStudyModal');
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

function discussSimilarProject(projectName) {
  closeCaseStudy();
  const notesField = document.querySelector('textarea[name="userNotes"]');
  if (notesField) {
    notesField.value = `Interested in a design transformation similar to: ${projectName}`;
  }
  const consultSection = document.getElementById('consultation');
  consultSection.scrollIntoView({ behavior: 'smooth' });
}

// 5. INTERACTIVE DESIGN DISCOVERY & STYLE QUIZ
let selectedStyle = 'contemporary';
let selectedSpace = 'kitchen';

const STYLE_BRIEFS = {
  contemporary: {
    title: 'Contemporary Warm Interior',
    materials: 'Warm walnut veneers, fluted paneling, brushed champagne metal accents, and Calacatta quartz.',
    lighting: 'Concealed 2700K ambient LED coves with magnetic architectural track lights.',
    timeline: '35 - 45 Days Handover Guarantee in Ranchi'
  },
  minimal: {
    title: 'Minimal Japandi Aesthetic',
    materials: 'Bleached oak, matte off-white acrylic shutters, curved lime-wash plaster and microcement.',
    lighting: 'Diffused indirect 3000K warm wash and paper pendant accents.',
    timeline: '30 - 40 Days Handover Guarantee in Ranchi'
  },
  classic: {
    title: 'Modern Classic Elegance',
    materials: 'Subtle wall boiserie mouldings, Italian marble slabs, polished brass hardware, velvet furnishings.',
    lighting: 'Chandelier focal points paired with warm peripheral warm downlights.',
    timeline: '45 - 55 Days Handover Guarantee in Ranchi'
  },
  industrial: {
    title: 'Sleek Italian Industrial',
    materials: 'Matte slate grey acrylic, black Gola profile channels, smoked bronze glass, textured concrete tiles.',
    lighting: 'High CRI 90+ directional spotlights and slim under-cabinet profile extrusions.',
    timeline: '35 - 45 Days Handover Guarantee in Ranchi'
  }
};

function initStyleQuiz() {
  const styleCards = document.querySelectorAll('.style-card');
  const spaceBtns = document.querySelectorAll('.space-btn');

  styleCards.forEach(card => {
    card.addEventListener('click', () => {
      styleCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      selectedStyle = card.getAttribute('data-style');
      updateBriefDisplay();
    });
  });

  spaceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      spaceBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedSpace = btn.getAttribute('data-space');
      updateBriefDisplay();
    });
  });
}

function updateBriefDisplay() {
  const styleInfo = STYLE_BRIEFS[selectedStyle];
  const spaceName = {
    'kitchen': 'Modular Kitchen',
    'full-home': 'Complete 3BHK/4BHK Home',
    'bedroom': 'Master Bedroom Suite',
    'commercial': 'Cafe / Commercial Interior'
  }[selectedSpace];

  document.getElementById('briefTitle').textContent = `${styleInfo.title} • ${spaceName}`;
  document.getElementById('briefMaterials').textContent = styleInfo.materials;
  document.getElementById('briefLighting').textContent = styleInfo.lighting;
  document.getElementById('briefTimeline').textContent = styleInfo.timeline;
}

function sendBriefViaWhatsApp() {
  const styleInfo = STYLE_BRIEFS[selectedStyle];
  const spaceName = {
    'kitchen': 'Modular Kitchen',
    'full-home': 'Complete Home Interior',
    'bedroom': 'Master Bedroom Suite',
    'commercial': 'Cafe / Commercial Space'
  }[selectedSpace];

  const text = `Hi Seven Palm Interio team (+91 85218 88983),%0A%0AI used your interactive design discovery tool and generated this project brief for my property in Ranchi:%0A%0A*Aesthetic Style:* ${styleInfo.title}%0A*Space Type:* ${spaceName}%0A*Materials:* ${styleInfo.materials}%0A%0ACan we schedule a consultation at your Hinoo studio or on-site in Ranchi?`;

  window.open(`https://wa.me/918521888983?text=${text}`, '_blank');
}

// 6. MULTI-STEP CONSULTATION WIZARD LOGIC
let currentStep = 1;

function nextWizardStep(step) {
  // Simple validation
  if (step === 2 && currentStep === 1) {
    // Step 1 check
  }
  
  document.getElementById(`wizardStep${currentStep}`).classList.add('hidden');
  document.getElementById(`wizardStep${step}`).classList.remove('hidden');

  currentStep = step;
  document.getElementById('currentStepNum').textContent = step;
  document.getElementById('stepIndicator').textContent = step;

  const titles = {
    1: 'Property & Scope',
    2: 'Budget & Timeline',
    3: 'Contact & Schedule Date'
  };
  document.getElementById('stepTitle').textContent = titles[step];
  lucide.createIcons();
}

function handleConsultationSubmit(e) {
  e.preventDefault();

  const form = document.getElementById('consultationForm');
  const formData = new FormData(form);

  const userName = formData.get('userName');
  const userPhone = formData.get('userPhone');
  const propertyType = formData.get('propertyType');
  const location = formData.get('location');
  const budget = formData.get('budget');
  const timeline = formData.get('timeline');
  const preferredDate = formData.get('preferredDate') || 'As soon as possible';
  const meetingType = formData.get('meetingType');
  const userNotes = formData.get('userNotes') || 'Turnkey interior design inquiry';

  // Generate reference number
  const refNum = '#SPI-' + Math.floor(1000 + Math.random() * 9000);

  // Show success screen
  form.classList.add('hidden');
  const successScreen = document.getElementById('wizardSuccess');
  successScreen.classList.remove('hidden');

  document.getElementById('confirmedName').textContent = userName;
  document.getElementById('refNumber').textContent = refNum;

  // Configure Direct WhatsApp Action
  const waBtn = document.getElementById('directWhatsAppBtn');
  waBtn.onclick = () => {
    const waText = `*New Consultation Request (${refNum})*%0A%0A*Client:* ${userName}%0A*Phone:* ${userPhone}%0A*Property:* ${propertyType}%0A*Location in Ranchi:* ${location}%0A*Budget Bracket:* ${budget}%0A*Timeline:* ${timeline}%0A*Date Preference:* ${preferredDate}%0A*Meeting Mode:* ${meetingType}%0A*Notes:* ${userNotes}`;
    window.open(`https://wa.me/918521888983?text=${waText}`, '_blank');
  };

  lucide.createIcons();
}

function resetWizard() {
  document.getElementById('consultationForm').reset();
  document.getElementById('consultationForm').classList.remove('hidden');
  document.getElementById('wizardSuccess').classList.add('hidden');
  nextWizardStep(1);
}

// 7. DATE PICKER MINIMUM TODAY
function initDatePicker() {
  const dateInput = document.getElementById('datePicker');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }
}

// 8. MOBILE MENU TOGGLE
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileDrawer');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (menuBtn && drawer) {
    menuBtn.addEventListener('click', () => {
      drawer.classList.toggle('hidden');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.add('hidden');
      });
    });
  }
}

// Explicit window exposures for inline HTML onclick handlers
window.openCaseStudy = openCaseStudy;
window.closeCaseStudy = closeCaseStudy;
window.discussSimilarProject = discussSimilarProject;
window.sendBriefViaWhatsApp = sendBriefViaWhatsApp;
window.nextWizardStep = nextWizardStep;
window.handleConsultationSubmit = handleConsultationSubmit;
window.resetWizard = resetWizard;
