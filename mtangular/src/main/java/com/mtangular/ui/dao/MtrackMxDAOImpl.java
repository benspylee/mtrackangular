package com.mtangular.ui.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.criterion.CriteriaQuery;
import org.hibernate.query.criteria.internal.CriteriaQueryImpl;
import org.springframework.stereotype.Repository;

import com.mtangular.ui.core.DAOBase;
import com.mtrack.murupakkam.core.model.Mbasemodel;
import com.mtrack.murupakkam.model.Quotes;

@Repository
public class MtrackMxDAOImpl extends DAOBase{

	
	public List<Quotes> retriveAllQuotes() throws Exception
	{
		Criteria criteria =(Criteria) getSessionFactory().openSession().createCriteria(Quotes.class);
		return criteria.list();
	}
}
