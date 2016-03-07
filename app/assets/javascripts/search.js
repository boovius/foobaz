search = angular.module('search', []);

search.controller('SearchCtrl', function($scope){
  $('#query-submit').click(function(e){
    e.preventDefault();
    $('.search-results div').show();

    var query = $('#query').val();

    $.get('/search', {query: query}, function(data){
      $scope.artists = data.artists;
      $scope.albums = data.albums;
      $scope.songs = data.songs;

      $scope.noResults = hasNoResults(data);

      $scope.$apply();
    });
  });
});

function hasNoResults(data){
  return noArtists(data) && noAlbums(data) && noSongs(data);
}

function noArtists(data){
  return data.artists.length === 0;
}

function noAlbums(data){
  return data.albums.length === 0;
}

function noSongs(data){
  return data.songs.length === 0;
}
