import $ from 'jquery';

$(() => {
  $('.vclPostContent img').click((e) => window.open($(e.target).attr('src'), '_blank'));
});
