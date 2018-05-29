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
import com.mtrack.murupakkam.model.Quotes;

@RestController
public class QuoteMxController extends ControlBase<Quotes> {
	
	@Autowired
	private MtrackMxService mtrackMxService;
	
	@RequestMapping(path="/quotes",method=RequestMethod.GET)
	public ResponseWrap<?> retriveAll()
	{
		return (ResponseWrap<?>) mtrackMxService.retriveAllQuotes();
		
	}
	
	@RequestMapping(path="/quotes/{id}",method=RequestMethod.GET)
	public ResponseWrap<?> retriveById(@PathVariable int id)
	{
		return null;
	}
	
	@RequestMapping(path="/quotes",method=RequestMethod.POST)
	public ResponseWrap<?> add(@RequestBody Quotes obj)
	{

		return (ResponseWrap<?>) mtrackMxService.addQuotes(obj);
		
	}
	
	@RequestMapping(path="/quotes/{id}",method=RequestMethod.POST)
	public ResponseWrap<?> update(@RequestBody Quotes obj)
	{
		return (ResponseWrap<?>) mtrackMxService.updateQuotes((Quotes) obj);
		
	}
	
	@RequestMapping(path="/quotes/{id}",method=RequestMethod.DELETE)
	public ResponseWrap<?> delete(@PathVariable int id)
	{
		return (ResponseWrap<?>) mtrackMxService.deleteQuotes(id);
	}
	
	
	

}
