"use strict";$(document).ready((function(){function t(t){$(".search__results .search__item").each((function(e,i){$(".search__error").hide(),$(i).find(".search-item__title").text().toLowerCase().includes(t)?$(this).show():$(this).hide()})),0===$(".search__results .search__item:visible").length&&$(".search__error").show()}$(".header__login").click((function(){$(this).toggleClass("active"),$(".header__options").toggleClass("active")})),$(".search__tabitem").each((function(){$(this).click((function(){var t=$(this).attr("data-path");$(".search__tabitem, .tabcontent__list").removeClass("active"),$(this).addClass("active"),$('.tabcontent__list[data-target="'.concat(t,'"]')).addClass("active")}))})),$("form").submit((function(e){e.preventDefault();var i=$(this).find(".form__input").val().toLowerCase().trim();i&&t(i),$(this).find(".form__input").val("")})),$(".tabcontent__item").each((function(e,i){$(i).click((function(){t($(i).text().toLowerCase().trim())}))}))}));