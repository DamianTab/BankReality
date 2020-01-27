package damian.tab.bankreality.api;

import damian.tab.bankreality.database.model.LegalPerson;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/legal")
@RestController
public class LegalPersonApi extends GenericRESTApi<LegalPerson> {
    public LegalPersonApi(JpaRepository<LegalPerson, Integer> dao) {
        super(dao);
    }
}
