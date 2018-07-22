package com.mtangular.ui.control;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

import com.mtangular.ui.core.ControlBase;
import com.mtangular.ui.service.MtrackMxService;
import com.mtrack.murupakkam.core.model.ResponseWrap;
import com.mtrack.murupakkam.model.MtrackUser;
import com.mtrack.murupakkam.model.Mtrackpost;

@RestController
public class MtrackUserMxController extends ControlBase<MtrackUser> {

	@Autowired
	private MtrackMxService mtrackMxService;
	
	@RequestMapping(path="/users",method=RequestMethod.GET)
	public ResponseWrap<?> retriveAll()
	{
		return (ResponseWrap<?>) mtrackMxService.retriveAllMtrackUser();
		
	}
	
	@RequestMapping(path="/users/{id}",method=RequestMethod.GET)
	public ResponseWrap<?> retriveById(@PathVariable int id)
	{
		return null;
	}
	
	@RequestMapping(path="/users",method=RequestMethod.POST)
	public ResponseWrap<?> add(@RequestBody MtrackUser obj)
	{
		return (ResponseWrap<?>) mtrackMxService.addMtrackUser(obj);
		
	}
	
	@RequestMapping(path="/users/{id}",method=RequestMethod.POST)
	public ResponseWrap<?> update(@RequestBody MtrackUser obj)
	{
			return (ResponseWrap<?>) mtrackMxService.updateMtrackUser(obj);
		
	}
	
	@RequestMapping(path="/users/{id}",method=RequestMethod.DELETE)
	public ResponseWrap<?> delete(@PathVariable int id)
	{
		return (ResponseWrap<?>) mtrackMxService.deleteMtrackUser(id);
	}
	
	
	@RequestMapping(path="/users/authenticate",method=RequestMethod.POST)
	public ResponseWrap<?> authenticate(@RequestBody MtrackUser obj)
	{
		return (ResponseWrap<?>) mtrackMxService.authenticateUser(obj);
		
	}
	
}
