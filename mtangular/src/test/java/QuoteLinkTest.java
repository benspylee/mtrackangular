/*
 * This Java source file was generated by the Gradle 'init' task.
 */
import org.junit.Before;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mtangular.ui.SpringMxBootApp;
import com.mtangular.ui.utils.ReturnStatus;
import com.mtrack.murupakkam.core.model.ResponseWrap;
import com.mtrack.murupakkam.model.Quotes;

import static org.junit.Assert.*;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;

//@RunWith(SpringRunner.class)
//@SpringBootTest(webEnvironment=WebEnvironment.RANDOM_PORT,classes=SpringMxBootApp.class)
//@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class QuoteLinkTest {
  
	@Autowired
	private TestRestTemplate testRestTemplate;
	
	
	public Quotes quotes=null;
	
	//@Before
	public void setup()
	{
		quotes=new Quotes();
		quotes.setStatus(1);
		quotes.setQuotedesc("All is well");
	}
	
	//@Test
	//@Before
	public void a1addtest() throws JsonParseException, JsonMappingException, IOException
	{	
		ResponseEntity<ResponseWrap> responseEntity =testRestTemplate.postForEntity("/quotes",quotes , ResponseWrap.class);
		ResponseWrap wrap=responseEntity.getBody();
		assertEquals(wrap.getMsg(), ReturnStatus.SUCCESS.getMsg());
		ObjectMapper mapper=new ObjectMapper();
		assertNotNull(wrap.getResponse());
		quotes=mapper.readValue(wrap.getResponse().toString(), Quotes.class);
		System.out.println("######++++##### "+quotes);
	}
	
	//@Test
	public void a2updatetest() throws JsonParseException, JsonMappingException, IOException
	{
		quotes.setQuotecolor("red");
		ResponseEntity<ResponseWrap> responseEntity =testRestTemplate.postForEntity("/quotes/"+quotes.getQuoteno(),quotes , ResponseWrap.class);
		ResponseWrap wrap=responseEntity.getBody();
		assertEquals(wrap.getMsg(), ReturnStatus.SUCCESS.getMsg());
	}
	
	//@Test
	public void a3retrievetest() throws JsonParseException, JsonMappingException, IOException, URISyntaxException
	{
		
		URI uri=new URI("/quotes");
		RequestEntity requestEntity=RequestEntity.get(uri).build();
		ResponseEntity<ResponseWrap> responseEntity =testRestTemplate.exchange(requestEntity, ResponseWrap.class);
		ResponseWrap wrap=responseEntity.getBody();
		assertEquals(wrap.getMsg(), ReturnStatus.SUCCESS.getMsg());
	}
	
	//@Test
	public void a4deletetest() throws JsonParseException, JsonMappingException, IOException, URISyntaxException
	{
		URI uri=new URI("/quotes/"+quotes.getQuoteno());
		RequestEntity requestEntity=RequestEntity.delete(uri).build();
		ResponseEntity<ResponseWrap> responseEntity =testRestTemplate.exchange(requestEntity, ResponseWrap.class);
		ResponseWrap wrap=responseEntity.getBody();
		assertEquals(wrap.getMsg(), ReturnStatus.SUCCESS.getMsg());
	}
	
	
	
}
