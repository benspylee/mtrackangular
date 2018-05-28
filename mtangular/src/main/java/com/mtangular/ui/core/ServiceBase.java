package com.mtangular.ui.core;

import com.mtangular.ui.utils.ReturnStatus;
import com.mtrack.murupakkam.core.model.ResponseWrap;

public class ServiceBase {
	
	
	public ResponseWrap	handleSuccessResponse(Object obj)
	{
		ResponseWrap response=new ResponseWrap();
		response.setMsg(ReturnStatus.SUCCESS.getMsg());
		response.setResponse(obj);
		return response;
	}
	
	public ResponseWrap	handleFailedResponse(Object obj,String desc)
	{
		ResponseWrap response=new ResponseWrap();
		response.setMsg(ReturnStatus.FAIL.getMsg());
		response.setResponse(obj);
		response.setMsgdesc(desc);
		return response;
	}

}
