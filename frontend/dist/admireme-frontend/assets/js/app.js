$(document).ready(function ($) {

  $(document).on('click', '#button-toggle', function (e) {
    $(".dropdown.open > .dropdown-toggle").dropdown("toggle");
    return false;
  });
  $(document).on('click', '#button-toggle', function (e) {
    $('.wrapper').toggleClass('slide-menu');
    return false;
  });


  // $('.sortableDashboard').sortable({
  //     placeholder: "sortable-placeholder",
  //     connectWith:".sortableDashboard",
  //     handle: ".card-title",
  //     cursor: "move",
  //     dropOnEmpty: true,
  //     tolerance: "pointer",
  //     forcePlaceholderSize: true,
  //     update: function(event, ui) {
  //
  //       // Do Ajax in here
  //       const debug = {
  //         sender: ui.sender,
  //         items: ui.item
  //       };
  //       console.table(debug);
  //
  //     }
  // });
  //
  // $('.sortableTest2').sortable({
  //   placeholder: "sortable-placeholder",
  //   connectWith:".sortableDashboard",
  //   handle: ".card-title",
  //   cursor: "move",
  //   dropOnEmpty: true,
  //   tolerance: "pointer",
  //   forcePlaceholderSize: true,
  //   update: function(event, ui) {
  //
  //     // Do Ajax in here
  //     const debug = {
  //       sender: ui.sender,
  //       items: ui.item
  //     };
  //     console.table(debug);
  //
  //   }
  // });
  //
  // $(document).ready(function(){
  //
  //
  //   $('.dashboardSortable').sortable({
  //     placholder: 'sortable-placeholder',
  //     connectWith: '.dashboardSortable',
  //     handle: '.card-title',
  //     cursor: 'move',
  //     dropOnEmpty: true,
  //     tolerance: 'pointer',
  //     forcePlaceholderSize: true,
  //     update: function(event, ui){
  //
  //       let sortableItems = [];
  //
  //       $('.dashboardSortable').each(function(){
  //
  //         let dashboardNum = $(this).data('dashboard');
  //         let colNum = $(this).data('col');
  //
  //         let dashboardItems = [];
  //
  //         $('li',$(this)).each(function(){
  //
  //           let itemNum = $(this).data('item');
  //
  //           dashboardItems.push(itemNum);
  //
  //         });
  //
  //         sortableItems.push(dashboardItems);
  //       });
  //
  //       // get all the data
  //       let sortableData = $(this).sortable('serialize');
  //
  //       $.ajax({
  //         url: 'http://api.webuyanyhouse.local:8080/dashboard/save',
  //         type: 'post',
  //         data: JSON.stringify({
  //           items: sortableItems
  //         }),
  //         processData:false,
  //         headers:{
  //           'X-AUTH-TOKEN':'d34f740bf4d74c07d913a45e73612aab',
  //           'Content-Type':'application/json',
  //           'Authorization' : 'Basic',
  //           'Accept' : 'application/json'
  //         },
  //         dataType:'json',
  //         contentType:'application/json',
  //         success:(response)=>{
  //
  //         }
  //       });
  //
  //
  //       console.log("SORTING",sortableData);
  //     }
  //   });
  // });
});

