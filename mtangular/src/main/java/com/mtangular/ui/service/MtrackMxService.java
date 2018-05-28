package com.mtangular.ui.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mtangular.ui.core.ServiceBase;
import com.mtangular.ui.dao.MtrackMxDAOImpl;
import com.mtrack.murupakkam.core.model.ResponseWrap;
import com.mtrack.murupakkam.model.Quotes;


@Service
public class MtrackMxService extends ServiceBase {

	@Autowired
	private MtrackMxDAOImpl mtrackMxDAOImpl;
	
	public ResponseWrap<?> retriveAllQuotes()
	{
		try {
			return  handleSuccessResponse(mtrackMxDAOImpl.retriveAllQuotes());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			return  handleFailedResponse((Object)e.getMessage(),null);
		}

	}
}
