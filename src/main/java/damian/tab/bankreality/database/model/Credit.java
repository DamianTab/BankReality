package damian.tab.bankreality.database.model;

import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Entity
@Getter
@Setter
public class Credit extends BaseModel implements Serializable {
//    @Id
//    @NotNull
//    @GeneratedValue(generator = "credit_generator")
//    @SequenceGenerator(name = "credit_generator", sequenceName = "credit_sequence", initialValue = 3000000, allocationSize = 10)
//    private int id;

    @Autowired
    public Credit(@Qualifier("CreditKey") PrimaryKey key) {
        this.key = key;
    }

    @NotNull
    @Column
    private double loanAmount;

    @NotNull
    @Column
    private int interestRate;

    @NotNull
    @Column
    private int loanTime;

    @NotNull
    @Column
    private double EMI;

//    @ManyToOne
//    @JoinColumn(name = "login")
////    @EmbeddedId
//    private Client client;

//    @ManyToOne
//    @JoinColumn(name = "accountNumber")
////    @EmbeddedId
//    private Account account;

//    @EmbeddedId
//    private CreditKey key;

    @Data
    @EqualsAndHashCode
    @Component("CreditKey")
    @Embeddable
    private class CreditKey implements PrimaryKey{
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
}

