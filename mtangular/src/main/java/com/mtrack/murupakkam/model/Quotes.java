package com.mtrack.murupakkam.model;

import com.mtrack.murupakkam.core.model.Mbasemodel;
import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;










@Entity
public class Quotes
extends Mbasemodel
implements Serializable
{
	@Id
	@GeneratedValue
	private int quoteno;
	private String quotedesc;
	private String quotecolor;
	private String quoteimg;
	private Date createddate;
	private Integer cuser;
	private Integer status;
	private Date modifieddate;
	private Integer muser;

	public int getQuoteno()
	{
		return this.quoteno;
	}

	public void setQuoteno(int quoteno) {
		this.quoteno = quoteno;
	}

	public String getQuotedesc() { return this.quotedesc; }

	public void setQuotedesc(String quotedesc)
	{
		this.quotedesc = quotedesc;
	}

	public String getQuotecolor() { return this.quotecolor; }

	public void setQuotecolor(String quotecolor)
	{
		this.quotecolor = quotecolor;
	}

	public String getQuoteimg() { return this.quoteimg; }

	public void setQuoteimg(String quoteimg)
	{
		this.quoteimg = quoteimg;
	}

	public Date getCreateddate() { return this.createddate; }

	public void setCreateddate(Date createddate)
	{
		this.createddate = createddate;
	}

	public Integer getCuser() { return this.cuser; }

	public void setCuser(Integer cuser)
	{
		this.cuser = cuser;
	}

	public Integer getStatus() { return this.status; }

	public void setStatus(Integer status)
	{
		this.status = status;
	}

	public Date getModifieddate() { return this.modifieddate; }

	public void setModifieddate(Date modifieddate)
	{
		this.modifieddate = modifieddate;
	}

	public Integer getMuser() { return this.muser; }

	public void setMuser(Integer muser)
	{
		this.muser = muser;
	}

	@Override
	public String toString() {
		return " {\"quoteno\":\"" + quoteno + "\",\"quotedesc\":\"" + quotedesc + "\",\"quotecolor\":\"" + quotecolor
				+ "\",\"quoteimg\":\"" + quoteimg + "\",\"createddate\":\"" + createddate + "\",\"cuser\":\"" + cuser
				+ "\",\"status\":\"" + status + "\",\"modifieddate\":\"" + modifieddate + "\",\"muser\":\"" + muser
				+ "\"}";
	}

	
	/*@Override
	public String toString() {
		return "Quotes [quoteno=" + quoteno + ", quotedesc=" + quotedesc + ", quotecolor=" + quotecolor + ", quoteimg="
				+ quoteimg + ", createddate=" + createddate + ", cuser=" + cuser + ", status=" + status
				+ ", modifieddate=" + modifieddate + ", muser=" + muser + "]";
	}
	*/
	
	
	
}
