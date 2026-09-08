// ==========================================================================
// ROGER FÍGOLS SOLER — PORTFOLIO JAVASCRIPT
// Interactive Timeline, Filters, CV Download Modal, Smooth UI
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initTimeline();
  initFilters();
  initModal();
});

// 1. TIMELINE ACCORDION INTERACTION
function toggleTimeline(card) {
  const isAlreadyActive = card.classList.contains('active-card');
  
  // Optional: close other cards for an accordion feel (or allow multiple)
  const allCards = document.querySelectorAll('.timeline-card');
  allCards.forEach(c => {
    if (c !== card) {
      c.classList.remove('active-card');
    }
  });

  if (isAlreadyActive) {
    card.classList.remove('active-card');
  } else {
    card.classList.add('active-card');
  }
}

function initTimeline() {
  // Expose toggleTimeline globally for onclick in HTML
  window.toggleTimeline = toggleTimeline;
}

// 2. TIMELINE CATEGORY FILTERS
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const timelineItems = document.querySelectorAll('.timeline-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      timelineItems.forEach(item => {
        const cat = item.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          item.classList.remove('hidden-item');
          item.style.opacity = '0';
          setTimeout(() => {
            item.style.opacity = '1';
          }, 50);
        } else {
          item.classList.add('hidden-item');
        }
      });
    });
  });
}

// 3. CV DOWNLOAD MODAL
function initModal() {
  const modal = document.getElementById('cv-modal');
  const openButtons = document.querySelectorAll('.btn-cv-header, .open-cv-modal-trigger');
  const closeBtn = document.getElementById('close-cv-modal');

  const openModal = () => {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  };

  openButtons.forEach(btn => btn.addEventListener('click', openModal));
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  // Close when clicking outside the card
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}
