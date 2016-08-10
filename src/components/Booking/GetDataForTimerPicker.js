import GetDataFromJson from './GetDataFromJson';

export default function GetDataForTimerPicker(startDate, endDate, LokationId, trailerId, context) {
  const url = `http://52.18.171.117/api/website/location/availableTimes/${startDate}/${endDate}/${LokationId}/0/${trailerId}`;
  function onsuccess(data){
    context.loadingFunc(data);
  }
  GetDataFromJson(url).then(function (successResponse) {
    onsuccess(successResponse);
  }, function () {

  });
}
