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
exports.BookDTO = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const athor_dto_1 = require("./athor.dto");
class BookDTO {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    class_validator_1.MinLength(2),
    class_validator_1.MaxLength(100),
    __metadata("design:type", String)
], BookDTO.prototype, "name", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Type(() => athor_dto_1.AuthorDTO),
    class_validator_1.ArrayMinSize(1),
    class_validator_1.IsNotEmptyObject({ each: true }),
    class_validator_1.ValidateNested({ each: true }),
    __metadata("design:type", Array)
], BookDTO.prototype, "author", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    class_validator_1.MinLength(2),
    class_validator_1.MaxLength(100),
    __metadata("design:type", String)
], BookDTO.prototype, "language", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumber(),
    class_validator_1.IsPositive(),
    __metadata("design:type", Number)
], BookDTO.prototype, "realeseYear", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.MinLength(2),
    class_validator_1.MaxLength(100),
    __metadata("design:type", String)
], BookDTO.prototype, "publisher", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsPositive(),
    __metadata("design:type", Number)
], BookDTO.prototype, "pages", void 0);
exports.BookDTO = BookDTO;
//# sourceMappingURL=books.dto.js.map