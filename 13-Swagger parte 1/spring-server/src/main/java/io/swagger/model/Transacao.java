package io.swagger.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.model.Cliente;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * Transacao
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2020-06-26T18:34:37.961Z")

public class Transacao   {
  @JsonProperty("agencia")
  private Integer agencia = null;

  @JsonProperty("numero")
  private Long numero = null;

  @JsonProperty("digito")
  private Integer digito = null;

  @JsonProperty("saldo")
  private Double saldo = null;

  @JsonProperty("cliente")
  private Cliente cliente = null;

  public Transacao agencia(Integer agencia) {
    this.agencia = agencia;
    return this;
  }

  /**
   * Get agencia
   * @return agencia
  **/
  @ApiModelProperty(example = "1234", value = "")


  public Integer getAgencia() {
    return agencia;
  }

  public void setAgencia(Integer agencia) {
    this.agencia = agencia;
  }

  public Transacao numero(Long numero) {
    this.numero = numero;
    return this;
  }

  /**
   * Get numero
   * @return numero
  **/
  @ApiModelProperty(example = "12234", value = "")


  public Long getNumero() {
    return numero;
  }

  public void setNumero(Long numero) {
    this.numero = numero;
  }

  public Transacao digito(Integer digito) {
    this.digito = digito;
    return this;
  }

  /**
   * Get digito
   * @return digito
  **/
  @ApiModelProperty(example = "6", value = "")


  public Integer getDigito() {
    return digito;
  }

  public void setDigito(Integer digito) {
    this.digito = digito;
  }

  public Transacao saldo(Double saldo) {
    this.saldo = saldo;
    return this;
  }

  /**
   * Get saldo
   * @return saldo
  **/
  @ApiModelProperty(example = "204.45", value = "")


  public Double getSaldo() {
    return saldo;
  }

  public void setSaldo(Double saldo) {
    this.saldo = saldo;
  }

  public Transacao cliente(Cliente cliente) {
    this.cliente = cliente;
    return this;
  }

  /**
   * Get cliente
   * @return cliente
  **/
  @ApiModelProperty(value = "")

  @Valid

  public Cliente getCliente() {
    return cliente;
  }

  public void setCliente(Cliente cliente) {
    this.cliente = cliente;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Transacao transacao = (Transacao) o;
    return Objects.equals(this.agencia, transacao.agencia) &&
        Objects.equals(this.numero, transacao.numero) &&
        Objects.equals(this.digito, transacao.digito) &&
        Objects.equals(this.saldo, transacao.saldo) &&
        Objects.equals(this.cliente, transacao.cliente);
  }

  @Override
  public int hashCode() {
    return Objects.hash(agencia, numero, digito, saldo, cliente);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Transacao {\n");
    
    sb.append("    agencia: ").append(toIndentedString(agencia)).append("\n");
    sb.append("    numero: ").append(toIndentedString(numero)).append("\n");
    sb.append("    digito: ").append(toIndentedString(digito)).append("\n");
    sb.append("    saldo: ").append(toIndentedString(saldo)).append("\n");
    sb.append("    cliente: ").append(toIndentedString(cliente)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}

