/**
 * NOTE: This class is auto generated by the swagger code generator program (2.4.14).
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */
package io.swagger.api;

import io.swagger.model.Transacao;
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

@Api(value = "transacao", description = "the transacao API")
@RequestMapping(value = "/bytebank-api/v1")
public interface TransacaoApi {

    @ApiOperation(value = "Altera valor da transação", nickname = "alteraValorTransacao", notes = "Irá realizar a alteração do valor da transação", authorizations = {
        @Authorization(value = "BasicAuth")
    }, tags={ "Transação", })
    @ApiResponses(value = { 
        @ApiResponse(code = 204, message = "Alteração do valor realizada com sucesso"),
        @ApiResponse(code = 400, message = "Requisição inválida"),
        @ApiResponse(code = 401, message = "Requisição inválida - Acesso negado"),
        @ApiResponse(code = 500, message = "Erro interno no servidor") })
    @RequestMapping(value = "/transacao/{id_transacao}",
        produces = { "application/json" }, 
        consumes = { "application/json" },
        method = RequestMethod.PUT)
    ResponseEntity<Void> alteraValorTransacao(@ApiParam(value = "",required=true) @PathVariable("id_transacao") Long idTransacao,@NotNull @ApiParam(value = "", required = true) @Valid @RequestParam(value = "valor", required = true) Double valor,@ApiParam(value = "" ,required=true) @RequestHeader(value="Authorization", required=true) String authorization);


    @ApiOperation(value = "Cadastra transação na conta", nickname = "cadastrarTransacao", notes = "Cadastra uma transação de débito ou depósito na conta", authorizations = {
        @Authorization(value = "BasicAuth")
    }, tags={ "Transação", })
    @ApiResponses(value = { 
        @ApiResponse(code = 201, message = "Cadastro da transação efetuado com sucesso."),
        @ApiResponse(code = 400, message = "Requisição inválida"),
        @ApiResponse(code = 401, message = "Requisição inválida - Acesso negado"),
        @ApiResponse(code = 500, message = "Erro interno no servidor") })
    @RequestMapping(value = "/transacao",
        produces = { "application/json" }, 
        consumes = { "application/json" },
        method = RequestMethod.POST)
    ResponseEntity<Void> cadastrarTransacao(@ApiParam(value = "" ,required=true) @RequestHeader(value="Authorization", required=true) String authorization,@ApiParam(value = "" ,required=true )  @Valid @RequestBody Transacao transacao,@NotNull @ApiParam(value = "", required = true, allowableValues = "debito, deposito") @Valid @RequestParam(value = "tipoTransacao", required = true) String tipoTransacao);


    @ApiOperation(value = "Exclui a transação", nickname = "excluiValorTransacao", notes = "Irá realizar a exclusão da transação", authorizations = {
        @Authorization(value = "BasicAuth")
    }, tags={ "Transação", })
    @ApiResponses(value = { 
        @ApiResponse(code = 204, message = "Exclus~ão do valor realizada com sucesso"),
        @ApiResponse(code = 400, message = "Requisição inválida"),
        @ApiResponse(code = 401, message = "Requisição inválida - Acesso negado"),
        @ApiResponse(code = 500, message = "Erro interno no servidor") })
    @RequestMapping(value = "/transacao/{id_transacao}",
        produces = { "application/json" }, 
        consumes = { "application/json" },
        method = RequestMethod.DELETE)
    ResponseEntity<Void> excluiValorTransacao(@ApiParam(value = "",required=true) @PathVariable("id_transacao") Long idTransacao,@ApiParam(value = "" ,required=true) @RequestHeader(value="Authorization", required=true) String authorization);

}