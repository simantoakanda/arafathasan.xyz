$(document).ready(function () {
    // Initialize Isotope
    var $portfolioContainer = $('.portfolio-container');
    $portfolioContainer.isotope();

    // Filter items on button click
    $('.portfolio-flters li').on('click', function () {
      $('.portfolio-flters li').removeClass('filter-active');
      $(this).addClass('filter-active');

      var filterValue = $(this).attr('data-filter');
      $portfolioContainer.isotope({ filter: filterValue });
    });

    // Add portfolio items dynamically
    var portfolioItems = [
      { category: 'remodeling', title: 'Remodeling 1', imageSrc: 'img/bg1.jpg', description: 'Lorem ipsum, dolor sit amet consectetur' },
      // Add more portfolio items as needed
    ];

    portfolioItems.forEach(function (item) {
      var portfolioItemHTML = `
        <div class="col-lg-4 col-md-6 portfolio-item filter-${item.category}">
          <div class="portfolio-content h-100">
            <img src="${item.imageSrc}" class="img-fluid" alt="${item.title}">
            <div class="portfolio-info">
              <h4>${item.title}</h4>
              <p>${item.description}</p>
              <a href="${item.imageSrc}" title="${item.title}" data-gallery="portfolio-gallery-${item.category}" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
              <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
            </div>
          </div>
        </div>`;
      $portfolioContainer.append(portfolioItemHTML);
    });

    // Initialize Lightbox
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    });
  });