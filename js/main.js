/**
 * Omar Nasser — AI Engineer Portfolio
 * Interactive client-side behavior
 */

(function () {
  'use strict';

  // --- Toast Notification Helper ---
  function showToast(message, isAccent = true) {
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.className = 'font-mono text-xs font-bold px-4 py-3 rounded-lg border-2 border-black shadow-brutal flex items-center gap-2';
      document.body.appendChild(toast);
    }

    if (isAccent) {
      toast.style.backgroundColor = '#2eff9b';
      toast.style.color = '#000000';
    } else {
      toast.style.backgroundColor = '#181618';
      toast.style.color = '#ffffff';
    }

    toast.innerHTML = `<span class="material-symbols-outlined text-base">check_circle</span> <span>${message}</span>`;
    toast.classList.add('show');

    if (toast.dataset.timeoutId) {
      clearTimeout(parseInt(toast.dataset.timeoutId, 10));
    }

    const timeoutId = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
    toast.dataset.timeoutId = timeoutId;
  }

  // --- Copy to Clipboard with Graceful Fallback ---
  window.copyTextToClipboard = async function (text, label) {
    let succeeded = false;
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        succeeded = true;
      } catch (err) {
        console.warn('Clipboard API failed, falling back to execCommand', err);
      }
    }

    if (!succeeded) {
      try {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        succeeded = document.execCommand('copy');
        document.body.removeChild(textArea);
      } catch (e) {
        succeeded = false;
      }
    }

    showToast(`${label} copied to clipboard!`);
  };

  // --- Mobile Drawer Handling ---
  const drawerToggle = document.getElementById('drawerToggle');
  const drawerClose = document.getElementById('drawerClose');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function openDrawer() {
    if (!drawerOverlay || !mobileDrawer) return;
    drawerOverlay.classList.remove('hidden');
    // Force reflow for smooth opacity transition
    void drawerOverlay.offsetWidth;
    drawerOverlay.classList.add('opacity-100');
    mobileDrawer.classList.remove('translate-x-full');
    document.body.style.overflow = 'hidden';
    if (drawerClose) drawerClose.focus();
  }

  function closeDrawer() {
    if (!drawerOverlay || !mobileDrawer) return;
    mobileDrawer.classList.add('translate-x-full');
    drawerOverlay.classList.remove('opacity-100');
    setTimeout(() => {
      drawerOverlay.classList.add('hidden');
      document.body.style.overflow = '';
    }, 250);
    if (drawerToggle) drawerToggle.focus();
  }

  if (drawerToggle) drawerToggle.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);
  drawerLinks.forEach((link) => link.addEventListener('click', closeDrawer));

  // --- Interactive RAG Pipeline Architecture Widget ---
  const pipelineData = {
    ingest: {
      title: "01: Document Ingestion (PDF / DOCX)",
      desc: "Robust extraction supporting multi-page PDF documents and nested tables, filtering extraneous formatting artifacts prior to chunking.",
      metric: "THROUGHPUT: 14 DOCS/SEC"
    },
    chunk: {
      title: "02: Semantic Chunking Strategy",
      desc: "Recursive token splitter with 500 characters and 50 character overlap, preserving paragraph boundaries and markdown headers.",
      metric: "AVG TOKENS: 120/CHUNK"
    },
    faiss: {
      title: "03: Dense Vector Embedding & FAISS Index",
      desc: "Generating normalized 1,536-dimensional embeddings indexed via FAISS FlatL2 for instantaneous cosine similarity retrieval.",
      metric: "INDEX QUERY: 38MS"
    },
    retrieve: {
      title: "04: LCEL Dynamic Retriever",
      desc: "LangChain LCEL orchestration fetching top-k grounded chunks with similarity scoring and context deduplication.",
      metric: "RECALL: 94.2%"
    },
    guard: {
      title: "05: Synthesis & Grounding Guardrails",
      desc: "Deterministic regular expression evaluation and strict context grounding asserting zero unreferenced hallucinated claims.",
      metric: "FAITHFULNESS: >0.96"
    },
    serve: {
      title: "06: Production Serving & Gradio UI",
      desc: "FastAPI endpoint integration backed by LangServe alongside real-time Gradio interactive browser demonstrator.",
      metric: "LATENCY: ~142MS"
    }
  };

  const nodeButtons = document.querySelectorAll('.pipeline-node');
  const stageTitle = document.getElementById('stageTitle');
  const stageDesc = document.getElementById('stageDesc');
  const stageMetric = document.getElementById('stageMetric');

  nodeButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const stage = btn.getAttribute('data-stage');
      const data = pipelineData[stage];
      if (!data) return;

      nodeButtons.forEach((b) => {
        b.classList.remove('bg-accent', 'font-bold');
        b.classList.add('bg-surface');
        b.setAttribute('aria-selected', 'false');
      });

      btn.classList.remove('bg-surface');
      btn.classList.add('bg-accent', 'font-bold');
      btn.setAttribute('aria-selected', 'true');

      if (stageTitle) stageTitle.textContent = data.title;
      if (stageDesc) stageDesc.textContent = data.desc;
      if (stageMetric) stageMetric.textContent = data.metric;
    });
  });

  // --- Case Study Modal Data & Handlers ---
  const caseStudies = {
    whisper: {
      category: "SPEECH-TO-TEXT // 244M PARAMS",
      title: "Arabic (Egyptian) Speech to Text via Whisper-small",
      solution: "Dialectal Arabic suffers from severe non-standard phonetic variances and colloquialisms that degrade vanilla Whisper performance. We adapted OpenAI's Whisper-small architecture specifically for Egyptian Arabic by implementing localized audio normalization (16kHz resampling, log-mel spectrogram extraction) paired with Arabic text normalization removing discretionary diacritics and non-essential punctuation.",
      highlights: [
        "Fine-tuned on 20,000 Mozilla Common Voice Arabic samples in PyTorch with FP16 precision",
        "Engineered custom collation pipeline handling variable audio lengths without excessive zero-padding",
        "Integrated Gradio real-time streaming interface for low-latency microphone transcription",
        "Reduced word error rate (WER) substantially on native colloquial speech recordings"
      ],
      metrics: "WER: 24.24% | CER: 11.14% | Training Checkpoint: 244M Params | Quantization: FP16",
      lessons: "Phonetic normalization and tailored acoustic filtering reduce error rates faster than model parameter expansion when targeting regional colloquial speech."
    },
    rag: {
      category: "RETRIEVAL-AUGMENTED GENERATION // LANGCHAIN LCEL",
      title: "SmartDoc Production RAG Agent",
      solution: "Enterprise document retrieval often hallucinates across lengthy technical manuals. SmartDoc utilizes recursive semantic chunking, normalized dense vector generation, and a high-performance FAISS vector index. The pipeline passes retrieved context chunks into LangChain LCEL with deterministic grounding assertions.",
      highlights: [
        "Multi-format document parser handling complex tabular PDF layouts and nested DOCX headers",
        "FAISS FlatL2 index normalized with cosine similarity for pinpoint factual recall",
        "Built-in regex & pattern-based safety guardrails checking for out-of-context fabrication",
        "FastAPI and LangServe backend exposing endpoints with telemetry logging response latencies"
      ],
      metrics: "Faithfulness Grounding Score: > 96% | Mean Vector Retrieval: 38ms | Architecture: LangChain LCEL",
      lessons: "Heuristic safety guardrails combined with source attribution scoring eliminate hallucinations far more reliably than temperature tuning alone."
    },
    csp: {
      category: "CONSTRAINT SATISFACTION (CSP) // ALGORITHMS",
      title: "Automated Academic Timetable Generator",
      solution: "Modeled multi-faculty university scheduling as an exact Constraint Satisfaction Problem. The engine accommodates multi-dimensional constraints including instructor availability, room seating limits, section requirements, and equipment prerequisites.",
      highlights: [
        "Eliminated all primary hard conflicts (instructor overlap, classroom capacity violations)",
        "Formulated greedy heuristic search algorithms with backtracking to converge on valid solutions rapidly",
        "Excel / CSV ingestion layer with schema validation to sanitize raw academic input data",
        "Automated export of 4 distinct interactive HTML schedule dashboards partitioned by department and faculty"
      ],
      metrics: "Hard Conflicts: 0 | Execution Time: < 3.2s for 120 Sessions | Output: 4 Responsive HTML Grids",
      lessons: "Decoupling constraint validation logic from schedule rendering allows immediate adaptation to new university regulations without core redesigns."
    },
    blood: {
      category: "BIOMEDICAL VISION // FEATURE FUSION",
      title: "Automated Blood Cell Classification Pipeline",
      solution: "Constructed a high-precision medical imaging pipeline separating white blood cell subtypes. Employs a two-stage computer vision workflow: advanced image filtering/color-space transformation followed by fused deep convolutional and handcrafted texture descriptors.",
      highlights: [
        "Applied histogram equalization and 2D Butterworth low-pass filtering to isolate micro-cellular noise",
        "Segmented nucleus regions utilizing LAB color-space thresholding",
        "Extracted deep embeddings from EfficientNetB0, ResNet50, and VGG alongside Local Binary Patterns (LBP) and GLCM texture vectors",
        "Conducted Principal Component Analysis (PCA) retaining 95% variance to power an optimal SVM classifier"
      ],
      metrics: "Classification Accuracy: 98.75% | AUC-ROC: 0.9999 | Dimensionality: PCA 95% Retention",
      lessons: "Fusing deep convolutional representations with classical texture statistics (LBP/GLCM) significantly outperforms stand-alone deep learning on specialized microscopic datasets."
    }
  };

  let lastActiveElement = null;

  window.openCaseStudy = function (key) {
    const data = caseStudies[key];
    if (!data) return;

    lastActiveElement = document.activeElement;

    const modal = document.getElementById('caseStudyModal');
    const modalCategory = document.getElementById('modalCategory');
    const modalTitle = document.getElementById('modalTitle');
    const modalSolution = document.getElementById('modalSolution');
    const modalMetrics = document.getElementById('modalMetrics');
    const modalLessons = document.getElementById('modalLessons');
    const highlightsEl = document.getElementById('modalHighlights');

    if (modalCategory) modalCategory.textContent = data.category;
    if (modalTitle) modalTitle.textContent = data.title;
    if (modalSolution) modalSolution.textContent = data.solution;
    if (modalMetrics) modalMetrics.textContent = data.metrics;
    if (modalLessons) modalLessons.textContent = data.lessons;

    if (highlightsEl) {
      highlightsEl.innerHTML = '';
      data.highlights.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        highlightsEl.appendChild(li);
      });
    }

    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      const closeBtn = modal.querySelector('button');
      if (closeBtn) closeBtn.focus();
    }
  };

  window.closeCaseStudy = function () {
    const modal = document.getElementById('caseStudyModal');
    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }
    if (lastActiveElement) {
      lastActiveElement.focus();
    }
  };

  // Close modal when clicking outside of modal container
  const caseStudyModal = document.getElementById('caseStudyModal');
  if (caseStudyModal) {
    caseStudyModal.addEventListener('click', (e) => {
      if (e.target === caseStudyModal) {
        closeCaseStudy();
      }
    });
  }

  // Global ESC key listener for modals and drawer
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (caseStudyModal && !caseStudyModal.classList.contains('hidden')) {
        closeCaseStudy();
      }
      if (mobileDrawer && !mobileDrawer.classList.contains('translate-x-full')) {
        closeDrawer();
      }
    }
  });

  // --- Project Inquiry Form Submission Handler ---
  const inquiryForm = document.getElementById('inquiryForm');
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const scopeEl = document.getElementById('inquiryScope');
      const msgEl = document.getElementById('inquiryMsg');
      const scope = scopeEl ? scopeEl.value : 'Project Inquiry';
      const msg = msgEl ? msgEl.value : '';

      const mailtoUrl = `mailto:omarr.elhawyy@gmail.com?subject=${encodeURIComponent(
        scope
      )}&body=${encodeURIComponent(msg)}`;

      showToast('Opening your email client...', true);
      window.location.href = mailtoUrl;
    });
  }
})();
