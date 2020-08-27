/**
 * NOTE: This class is auto generated by the swagger code generator program (2.4.14).
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */
package io.swagger.api;

import io.swagger.model.Extrato;
import io.swagger.annotations.*;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import javax.validation.constraints.*;
import java.util.List;
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2020-06-26T18:34:37.961Z")

@Api(value = "extrato", description = "the extrato API")
@RequestMapping(value = "/bytebank-api/v1")
public interface ExtratoApi {

    @ApiOperation(value = "Consulta extrato", nickname = "consultaExtrato", notes = "Consulta o extrato da conta do cliente", response = Extrato.class, authorizations = {
        @Authorization(value = "BasicAuth")
    }, tags={ "Extrato", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "OK - Sucesso na consulta do extrato", response = Extrato.class),
        @ApiResponse(code = 400, message = "Requisição inválida"),
        @ApiResponse(code = 401, message = "Requisição inválida - Acesso negado"),
        @ApiResponse(code = 500, message = "Erro interno no servidor") })
    @RequestMapping(value = "/extrato/{agencia}/{numero}/{digito}",
        produces = { "application/json" }, 
        consumes = { "application/json" },
        method = RequestMethod.GET)
    ResponseEntity<Extrato> consultaExtrato(@ApiParam(value = "",required=true) @PathVariable("agencia") Integer agencia,@ApiParam(value = "",required=true) @PathVariable("numero") Long numero,@ApiParam(value = "",required=true) @PathVariable("digito") Integer digito,@ApiParam(value = "" ,required=true) @RequestHeader(value="Authorization", required=true) String authorization);

}
