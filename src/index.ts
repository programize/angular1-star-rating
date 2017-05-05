import "angular";

import {StarRatingController} from "./star-rating.controller";
import {StarRatingComponent} from "./star-rating.component";

const icons = icons;

export {
      starRatingSizes
    , starRatingColors
    , starRatingSpeed
    , starRatingPosition
    , starRatingStarTypes
    , starRatingStarSpace
    , IStarRatingCompBindings
    , IStarRatingOnClickEvent
    , IStarRatingOnUpdateEvent
} from "./star-rating.structs"
export {StarRatingController} from "./star-rating.controller";
export {StarRatingComponent} from "./star-rating.component";

export const angularStars = angular
    .module('star-rating', [])
    .controller('starRatingCtrl', StarRatingController)
    .component('starRatingComp', new StarRatingComponent())
    .name;
