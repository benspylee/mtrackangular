package com.mtangular.ui.control;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mtangular.ui.core.ControlBase;
import com.mtangular.ui.service.MtrackMxService;
import com.mtrack.murupakkam.core.model.ResponseWrap;
import com.mtrack.murupakkam.model.Mtrackpost;
import com.mtrack.murupakkam.model.Mtrackpostview;

@RestController
public class PostviewMxController extends ControlBase<Mtrackpostview> {
	
	
	@Autowired
	private MtrackMxService mtrackMxService;
	
	@RequestMapping(path="/postview",method=RequestMethod.GET)
	public ResponseWrap<?> retriveAll()
	{
		return (ResponseWrap<?>) mtrackMxService.retriveAllPostview();
		
	}
	
	@RequestMapping(path="/postview/{id}",method=RequestMethod.GET)
	public ResponseWrap<?> retriveById(@PathVariable int id)
	{
		return null;
	}
	
	@RequestMapping(path="/postview",method=RequestMethod.POST)
	public ResponseWrap<?> add(@RequestBody Mtrackpostview obj)
	{
		return (ResponseWrap<?>) mtrackMxService.addPostview(obj);
		
	}
	
	@RequestMapping(path="/postview/{id}",method=RequestMethod.POST)
	public ResponseWrap<?> update(@RequestBody Mtrackpostview obj)
	{
			return (ResponseWrap<?>) mtrackMxService.updatePostview(obj);
		
	}
	
	@RequestMapping(path="/postview/{id}",method=RequestMethod.DELETE)
	public ResponseWrap<?> delete(@PathVariable int id)
	{
		return (ResponseWrap<?>) mtrackMxService.deletePostview(id);
	}
	
}
