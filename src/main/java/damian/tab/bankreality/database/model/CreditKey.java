package damian.tab.bankreality.database.model;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Data
@EqualsAndHashCode
@Component("CreditKey")
@Embeddable
public class CreditKey implements PrimaryKey{
    @NotNull
    @GeneratedValue(generator = "credit_generator")
    @SequenceGenerator(name = "credit_generator", sequenceName = "credit_sequence", initialValue = 3000000, allocationSize = 10)
    private int id;

    @ManyToOne
    @JoinColumn(name = "login")
//    @EmbeddedId
    private Client client;

    @ManyToOne
    @JoinColumn(name = "accountNumber")
//    @EmbeddedId
    private Account account;
}
