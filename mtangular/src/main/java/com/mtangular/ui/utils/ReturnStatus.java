package com.mtangular.ui.utils;

public enum ReturnStatus {

	SUCCESS("success"),FAIL("fail");
	
	private String msg;
	
	ReturnStatus(String msg)
	{
		this.msg=msg;
	}
	
	public String getMsg() {
		return msg;
	}	
	
}
