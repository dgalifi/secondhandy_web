"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var result_service_1 = require("../services/result.service");
var SearchResultComponent = (function () {
    function SearchResultComponent(_resultService) {
        this._resultService = _resultService;
        this.keyword = '';
        this.loading = false;
    }
    SearchResultComponent.prototype.searchClick = function () {
        var _this = this;
        this.loading = true;
        this._resultService.getResults(this.keyword)
            .subscribe(function (x) {
            _this.loading = false;
            _this.results = x;
        });
    };
    return SearchResultComponent;
}());
SearchResultComponent = __decorate([
    core_1.Component({
        selector: 'search-result',
        templateUrl: '/app/search-result/search-result.component.html',
        providers: [result_service_1.ResultService]
    }),
    __metadata("design:paramtypes", [result_service_1.ResultService])
], SearchResultComponent);
exports.SearchResultComponent = SearchResultComponent;
//# sourceMappingURL=search-result.component.js.map