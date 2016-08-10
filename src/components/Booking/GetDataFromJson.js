import $ from 'jquery';
import Q from 'q';

export default function GetDataFromJson(urlServer) {
  let defer = Q.defer();
  
    $.ajax({
      url: urlServer,
      headers: { country: 'dk' },
      dataType: 'json',
      async: true,
      success: function(data) {
        defer.resolve(data);
      },
      error: function (err) {
        defer.reject(err);
      }
    });

  return defer.promise;
}
