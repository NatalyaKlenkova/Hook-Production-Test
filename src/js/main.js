$(document).ready(function() {
    $('.header__login').click(function() {
        $(this).toggleClass('active');
        $('.header__options').toggleClass('active');
    })

    // Tabs
    $('.search__tabitem').each(function() {
        $(this).click(function() {
            let target = $(this).attr('data-path');
            $('.search__tabitem, .tabcontent__list').removeClass('active');
            $(this).addClass('active');
            $(`.tabcontent__list[data-target="${target}"]`).addClass('active');
        })
    })

    // Search
    $('form').submit(function(e) {
        e.preventDefault();
        let currentQuery = $(this).find('.form__input').val().toLowerCase().trim();
        if (currentQuery) {
            filterResults(currentQuery);
        }
        $(this).find('.form__input').val('');
    })

    $('.tabcontent__item').each(function(i, elem) {
        $(elem).click(function() {
            let currentQuery = $(elem).text().toLowerCase().trim();
            filterResults(currentQuery);
        })
    })

    function filterResults(query) {
        $('.search__results .search__item').each(function(i, elem) {
            $('.search__error').hide();
            $(elem).find('.search-item__title').text().toLowerCase().includes(query) ? $(this).show() : $(this).hide();
        })
        
        if ($('.search__results .search__item:visible').length === 0) {
            $('.search__error').show();
        }
    }
})