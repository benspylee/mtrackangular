package com.mtrack.murupakkam.core.model;

import java.io.Serializable;

public class ResponseWrap<T> implements Serializable
{
  private T response;
  private String msg;
  private String msgdesc;
  private boolean isSuccessful = true;
  
  public Object getResponse()
  {
    return this.response;
  }
  
  public void setResponse(T response) { this.response = response; }
  
  public String getMsg() {
    return this.msg;
  }
  
  public void setMsg(String msg) { this.msg = msg; }
  
  public String getMsgdesc() {
    return this.msgdesc;
  }
  
  public void setMsgdesc(String msgdesc) { this.msgdesc = msgdesc; }
  
  public boolean isSuccessful() {
    return this.isSuccessful;
  }
  
  public void setSuccessful(boolean isSuccessful) { this.isSuccessful = isSuccessful; }
}
